import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Account from "./pages/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/account",
      element: <Account />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
