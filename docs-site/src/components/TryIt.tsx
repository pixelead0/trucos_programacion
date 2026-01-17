import React from 'react';

interface TryItProps {
  children: React.ReactNode;
  title?: string;
}

export default function TryIt({ children, title = 'Pruébalo tú mismo' }: TryItProps) {
  return (
    <div className="tryIt">
      <div className="tryIt__header">
        <strong>💡 {title}</strong>
      </div>
      <div className="tryIt__content">
        {children}
      </div>
    </div>
  );
}
