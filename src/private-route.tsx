// @ts-ignore
import { isAuthenticated, getTokenSilently } from "@myorg/authn";
import { useEffect, useState } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [status, setStatus] = useState<
    "pending" | "authenticated" | "unauthenticated"
  >("pending");

  useEffect(() => {
    const checkAuthentication = async () => {
      const _ = await getTokenSilently().catch((err) => {});
      const authStatus = await isAuthenticated();
      setStatus(authStatus ? "authenticated" : "unauthenticated");
      if (authStatus === false) {
        window.location.href = "/";
      }
    };

    checkAuthentication();
  }, []);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  return status === "authenticated" ? <>{children}</> : null;
};

export default PrivateRoute;
