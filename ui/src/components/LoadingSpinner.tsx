import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  text?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({ size = "medium", text, fullScreen = false }: LoadingSpinnerProps) {
  const sizes = {
    small: 20,
    medium: 40,
    large: 60
  };

  const spinnerSize = sizes[size];

  const spinner = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: '3px solid rgba(59, 130, 246, 0.2)',
          borderTop: '3px solid var(--primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      {text && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{text}</p>}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  if (fullScreen) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          background: 'var(--bg-card)',
          padding: '2rem 3rem',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
}

export function TableSkeleton({ rows = 3, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          {Array.from({ length: columns }).map((_, i) => (
            <th key={i}>
              <div style={{
                height: '16px',
                background: 'var(--bg-dark)',
                borderRadius: '4px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex}>
                <div style={{
                  height: '14px',
                  background: 'var(--bg-dark)',
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                  animationDelay: `${(rowIndex * columns + colIndex) * 0.1}s`
                }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </table>
  );
}

export function CardSkeleton() {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div style={{
        height: '20px',
        width: '40%',
        background: 'var(--bg-dark)',
        borderRadius: '4px',
        marginBottom: '1rem',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
      <div style={{
        height: '40px',
        width: '60%',
        background: 'var(--bg-dark)',
        borderRadius: '4px',
        animation: 'pulse 1.5s ease-in-out infinite',
        animationDelay: '0.2s'
      }} />
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}