import React from 'react';
import clsx from 'clsx';

interface LessonMetaProps {
  level: 'beginner' | 'intermediate' | 'advanced';
  time: string;
  prereqs?: string[];
}

const levelLabels = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

const levelColors = {
  beginner: 'badge--success',
  intermediate: 'badge--warning',
  advanced: 'badge--danger',
};

export default function LessonMeta({ level, time, prereqs = [] }: LessonMetaProps) {
  return (
    <div className="lessonMeta">
      <div className="lessonMeta__header">
        <span className={clsx('badge', levelColors[level])}>
          {levelLabels[level]}
        </span>
        <span className="lessonMeta__time muted">⏱ {time}</span>
      </div>
      {prereqs.length > 0 && (
        <div className="lessonMeta__prereqs muted">
          <strong>Prerequisitos:</strong> {prereqs.join(' · ')}
        </div>
      )}
    </div>
  );
}
