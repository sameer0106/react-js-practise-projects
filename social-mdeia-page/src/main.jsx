import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./Store/Context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostGroup from "./Components/PostGroup.jsx";
import PostForm, { FormSubmitAction } from "./Components/CreatePost.jsx";
import WelcomeMessage from "./Components/Welcome.jsx";

const router = createBrowserRouter([
  // ACTUAL APP LAYOUT
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <WelcomeMessage /> },
      { path: "home", element: <PostGroup /> },
      { path: "/create", element: <PostForm />, action: FormSubmitAction },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
