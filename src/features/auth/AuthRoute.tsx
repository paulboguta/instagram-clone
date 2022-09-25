import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export interface IAuthRouteProps {
  children: any;
}

export const AuthRoute = ({ children }: IAuthRouteProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigate("/signup");
    }
  });

  return <>{children}</>;
};
