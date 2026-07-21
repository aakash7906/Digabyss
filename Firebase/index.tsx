// Cloud Firestore Functions
export {
  compoundQuery,
  numOfDocuments,
  getDocumentData,
  getMatchingData,
  getCollectionData,
} from "./CloudFirestore/GetData";
export { updateDocument, updateArray } from "./CloudFirestore/UpdateData";
export { addDocument, createDocument, logActivity } from "./CloudFirestore/SetData";
export { deleteDocument } from "./CloudFirestore/DeleteData";

// Authentication Functions
export { emailPasswordSignUp } from "./FirebaseAuth/UserSignUp";
export { emailPasswordLogin } from "./FirebaseAuth/UserLogin";
export { useLogout as UserLogOut } from "./FirebaseAuth/UserLogOut";
export { UserForgotPassword } from "./FirebaseAuth/UserForgotPassword";

// Cloud Storage Functions
export { UploadImage, deleteImage } from "./CloudStorage/UploadImages";
export { uploadFile, deleteFile } from "./CloudStorage/UploadFile";
export { serverTimestamp, functions } from "./firebase";
