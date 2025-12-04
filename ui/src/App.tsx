import React, { useState } from "react";
import DamlLedger from "@daml/react";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import { ToastProvider } from "./context/ToastContext";

const HTTP_BASE_URL = typeof window !== "undefined" 
  ? `${window.location.origin}/` 
  : "http://localhost:5173/";

const WS_BASE_URL = "ws://localhost:7575/";

export default function App() {
  const [credentials, setCredentials] = useState<{ 
    party: string; 
    token: string 
  } | null>(null);

  if (!credentials) {
    return (
      <Login
        onLogin={(token, party) => {
          setCredentials({ party, token }); 
        }}
      />
    );
  }

  return (
    <DamlLedger 
      party={credentials.party} 
      token={credentials.token} 
      httpBaseUrl={HTTP_BASE_URL}
      wsBaseUrl={WS_BASE_URL} 
    >
      <ToastProvider>
        <MainLayout />
      </ToastProvider>
    </DamlLedger>
  );
}

