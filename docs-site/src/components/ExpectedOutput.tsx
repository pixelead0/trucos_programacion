import React from 'react';

interface ExpectedOutputProps {
  children: React.ReactNode;
  title?: string;
}

export default function ExpectedOutput({ children, title = 'Resultado esperado' }: ExpectedOutputProps) {
  return (
    <div className="expectedOutput">
      <div className="expectedOutput__header">
        <strong>{title}:</strong>
      </div>
      <div className="expectedOutput__content">
        {children}
      </div>
    </div>
  );
}
