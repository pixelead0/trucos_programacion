import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

interface ModuleCardProps {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  objectives: string[];
  time: string;
  prereqs?: string[];
  to: string;
  moduleNumber: string;
}

const levelColors = {
  beginner: 'moduleCard--beginner',
  intermediate: 'moduleCard--intermediate',
  advanced: 'moduleCard--advanced',
};

const levelLabels = {
  beginner: '🟢 Principiante',
  intermediate: '🟡 Intermedio',
  advanced: '🔴 Avanzado',
};

export default function ModuleCard({
  title,
  level,
  objectives,
  time,
  prereqs = [],
  to,
  moduleNumber,
}: ModuleCardProps) {
  return (
    <div className={clsx('moduleCard', levelColors[level])}>
      <div className="moduleCard__header">
        <span className="moduleCard__number">{moduleNumber}</span>
        <span className="moduleCard__level">{levelLabels[level]}</span>
      </div>
      <h3 className="moduleCard__title">{title}</h3>
      <div className="moduleCard__objectives">
        <strong>Qué aprenderás:</strong>
        <ul>
          {objectives.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      </div>
      <div className="moduleCard__meta">
        <span className="muted">⏱ {time}</span>
        {prereqs.length > 0 && (
          <span className="muted">📋 {prereqs.join(', ')}</span>
        )}
      </div>
      <Link className="button button--outline button--primary moduleCard__button" to={to}>
        Continuar →
      </Link>
    </div>
  );
}
