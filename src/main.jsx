import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FusionAuthProvider } from "@fusionauth/react-sdk";
import "./index.css";
import { config } from "./config";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FusionAuthProvider {...config}>
    <App />
  </FusionAuthProvider>
);
