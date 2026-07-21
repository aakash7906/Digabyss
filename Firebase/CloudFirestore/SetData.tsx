
import { addDoc, collection, doc, setDoc, type DocumentData, type DocumentReference, type CollectionReference } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase";
import type { AuditLog } from "../../types/audit.types";


// Add Document to a Collection
export const addDocument = async <T extends DocumentData>(
  collectionName: string, 
  data: T
): Promise<DocumentReference<T> | void> => {
  try {
    return await addDoc(collection(db, collectionName) as CollectionReference<T>, {
      ...data,
    });
  } catch (err) {
    console.error("Error adding document:", err);
    throw err;
  }
};

// Create a Document with DocId
export const createDocument = async <T extends DocumentData>(
  collectionName: string, 
  docId: string, 
  data: T
): Promise<void> => {
  try {
    await setDoc(doc(db, collectionName, docId), {
      ...data,
    });
    console.log(`Document created successfully with ID: ${docId}`);
  } catch (err) {
    console.error("Error creating document:", err);
    throw err;
  }
};

/**
 * Log user activity to the 'audit_logs' collection.
 */
interface LocationInfo {
  ip: string;
  location: string;
}

let cachedLocation: LocationInfo | null = null;

export const logActivity = async (
  log: Omit<AuditLog, "timestamp" | "id">
): Promise<void> => {
  try {
    // Optimization: Cache IP and Geolocation to avoid redundant network requests
    if (!cachedLocation) {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
          const data = await response.json();
          const locParts = [data.city, data.region_name || data.region, data.country_name].filter(Boolean);
          cachedLocation = {
            ip: data.ip || "Unknown",
            location: locParts.length > 0 ? locParts.join(", ") : "Unknown",
          };
        } else {
          cachedLocation = { ip: "Unknown", location: "Unknown" };
        }
      } catch (e) {
        console.warn("Could not fetch location for audit log:", e);
        cachedLocation = { ip: "Unknown", location: "Unknown" };
      }
    }

    // Security: Sanitize metadata to prevent accidental logging of sensitive info
    const SENSITIVE_KEYS = ['password', 'token', 'secret', 'cvv', 'card', 'key', 'auth', 'credential'];
    const sanitize = (obj: any): any => {
      if (!obj || typeof obj !== 'object') return obj;
      const sanitized: any = Array.isArray(obj) ? [] : {};
      for (const [key, value] of Object.entries(obj)) {
        if (SENSITIVE_KEYS.some(s => key.toLowerCase().includes(s))) {
          sanitized[key] = '[REDACTED]';
        } else if (typeof value === 'object') {
          sanitized[key] = sanitize(value);
        } else {
          sanitized[key] = value;
        }
      }
      return sanitized;
    };

    const sanitizedMetadata = log.metadata ? sanitize(log.metadata) : {};

    // Remove undefined fields to prevent Firestore Error
    const cleanLog = Object.fromEntries(
      Object.entries(log).filter(([k, v]) => v !== undefined && k !== 'metadata')
    );

    await addDoc(collection(db, "audit_logs"), {
      ...cleanLog,
      metadata: sanitizedMetadata,
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      ip: cachedLocation.ip,
      location: cachedLocation.location,
    });
  } catch (err: any) {
    // If it's a "Document already exists" error (e.g. from retries/HMR double-triggers), ignore it
    if (err && (err.code === "already-exists" || (err.message && err.message.includes("already exists")))) {
      console.warn("Activity log already recorded (duplicate/retry).");
      return;
    }
    console.error("Error logging activity:", err);
  }
};