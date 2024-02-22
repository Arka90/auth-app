import { useFusionAuth } from "@fusionauth/react-sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const { isAuthenticated, isLoading, login, register } = useFusionAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated || isLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-6">
        <Button onClick={login} type="primary">
          Login
        </Button>
        <Button onClick={register} type="secondary">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Home;
