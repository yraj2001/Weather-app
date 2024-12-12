import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";
import router from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={querryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
