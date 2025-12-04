import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
    }}>
      <div style={{
        background: "var(--bg-card)", padding: "2rem", borderRadius: "12px",
        width: "100%", maxWidth: "500px", border: "1px solid var(--border)", position: "relative"
      }}>
        <div className="flex-between" style={{marginBottom: "1.5rem"}}>
          <h2 style={{margin: 0}}>{title}</h2>
          <button onClick={onClose} style={{background:"none", fontSize:"1.5rem", color:"var(--text-muted)"}}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}