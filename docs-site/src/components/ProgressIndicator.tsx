import React from 'react';
import clsx from 'clsx';

interface ProgressIndicatorProps {
  module: string;
  lesson: number;
  total: number;
  showLabel?: boolean;
}

export default function ProgressIndicator({
  module,
  lesson,
  total,
  showLabel = true,
}: ProgressIndicatorProps) {
  const percentage = Math.round((lesson / total) * 100);

  return (
    <div className="progressIndicator">
      {showLabel && (
        <div className="progressIndicator__header">
          <span className="progressIndicator__module">{module}</span>
          <span className="progressIndicator__lesson muted">
            Lección {lesson} de {total}
          </span>
        </div>
      )}
      <div className="progressIndicator__bar">
        <div
          className="progressIndicator__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="progressIndicator__percentage">
          {percentage}% completado
        </div>
      )}
    </div>
  );
}
