import React from 'react';
import clsx from 'clsx';

interface LessonMapProps {
  objectives: string[];
  useCases?: string[];
  time?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

const levelIcons = {
  beginner: '🟢',
  intermediate: '🟡',
  advanced: '🔵',
};

const levelLabels = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

export default function LessonMap({
  objectives,
  useCases = [],
  time,
  level,
}: LessonMapProps) {
  return (
    <div className="lessonMap">
      <div className="lessonMap__header">
        <h3 className="lessonMap__title">🗺️ Mapa de la Lección</h3>
        {time && (
          <span className="lessonMap__time muted">⏱ {time}</span>
        )}
        {level && (
          <span className="lessonMap__level">
            {levelIcons[level]} {levelLabels[level]}
          </span>
        )}
      </div>

      <div className="lessonMap__content">
        <div className="lessonMap__section">
          <h4 className="lessonMap__sectionTitle">🎯 Qué aprenderás</h4>
          <ul className="lessonMap__list">
            {objectives.map((objective, index) => (
              <li key={index} className="lessonMap__item">
                <span dangerouslySetInnerHTML={{ __html: objective }} />
              </li>
            ))}
          </ul>
        </div>

        {useCases.length > 0 && (
          <div className="lessonMap__section">
            <h4 className="lessonMap__sectionTitle">🌍 Para qué te sirve</h4>
            <ul className="lessonMap__list">
              {useCases.map((useCase, index) => (
                <li key={index} className="lessonMap__item">
                  <span dangerouslySetInnerHTML={{ __html: useCase }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
