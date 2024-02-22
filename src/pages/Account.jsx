import { useFusionAuth } from "@fusionauth/react-sdk";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Account = () => {
  const { isAuthenticated, isLoading, logout, user } = useFusionAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">
          You are signed in with{" "}
          <span className="text-[#cb202d]">{user.email}</span>
        </h1>
        <Button onClick={logout} type="primary">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Account;
