// import { FirebaseError } from "firebase/app";
// import { signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
// import { auth } from "../firebase";

// type EmailPasswordLoginResult =
//   | ({ success: true; user: UserCredential })
//   | ({ success: false; code?: string; message?: string });

// // Login users using their Email and Password
// export const emailPasswordLogin = async (
//   mail: string,
//   pass: string
// ): Promise<EmailPasswordLoginResult> => {
//   try {
//     const res = await signInWithEmailAndPassword(auth, mail, pass);
//     return { success: true, 
//       user: res 
//     };
//   } catch (error) {
//     if (error instanceof FirebaseError) {
//       return { success: false, code: error.code, message: error.message };
//     }
//     return { success: false, message: "An unknown error occurred" };
//   }
// };

import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { auth } from "../firebase";

type EmailPasswordLoginResult =
  | ({ success: true; user: UserCredential })
  | ({ success: false; code?: string; message?: string });

// Login users using their Email and Password
export const emailPasswordLogin = async (
  mail: string,
  pass: string
): Promise<EmailPasswordLoginResult> => {
  try {
    const res = await signInWithEmailAndPassword(auth, mail, pass);
    return { success: true, user: res };
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Handle suspended account
      if (error.code === "auth/user-disabled") {
        return { 
          success: false, 
          code: error.code, 
          message: "Your account has been suspended. Please contact support." 
        };
      }
      return { success: false, code: error.code, message: error.message };
    }
    return { success: false, message: "An unknown error occurred" };
  }
};
