import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { logActivity } from "../CloudFirestore/SetData";
import { sessionService } from "@/services/sessionService";


export const useLogout = () => {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const logout = async () => {
    try {
      if ((window as any)._unsubscribeSessionRevocation) {
        (window as any)._unsubscribeSessionRevocation();
        (window as any)._unsubscribeSessionRevocation = null;
      }
      await sessionService.cleanCurrentSession();

      if (user.uid) {
        await logActivity({
          userId: user.uid,
          userName: user.name || "User",
          userEmail: user.email || "",
          userRole: (user.role as any) || "guest",
          action: "LOGOUT",
          description: "User logged out of the application",
          path: window.location.pathname
        });
      }
      await auth.signOut();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isSuperAdmin"); // Remove super admin flag
      if (typeof document !== "undefined") {
        const root = document.documentElement;
        root.style.setProperty("--primary", "#10BC00");
        root.style.setProperty("--secondary", "#334155");
      }
      navigate("/signin");
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return logout;
};