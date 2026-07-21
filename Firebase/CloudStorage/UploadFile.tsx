import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase";

/**
 * Upload a file to Firebase Cloud Storage
 * @param file The file to upload
 * @param folder The folder in the bucket (e.g., 'documents', 'photos')
 * @returns The download URL of the uploaded file
 */
export const uploadFile = async (file: File, folder: string = "documents") => {
  // Create a unique filename to avoid collisions
  const timestamp = Date.now();
  const fileName = `${timestamp}_${file.name}`;
  const storageRef = ref(storage, `${folder}/${fileName}`);

  const upload = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(upload.ref);
  
  return downloadURL;
};

/**
 * Delete a file from Firebase Cloud Storage using its URL
 * @param fileUrl The full URL of the file to delete
 */
export const deleteFile = async (fileUrl: string) => {
  try {
    const storageRef = ref(storage, fileUrl);
    await deleteObject(storageRef);
    return true;
  } catch (err) {
    console.error("Error deleting file:", err);
    return false;
  }
};
