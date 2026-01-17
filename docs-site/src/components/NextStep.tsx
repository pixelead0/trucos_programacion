import React from 'react';
import Link from '@docusaurus/Link';

interface NextStepProps {
  to: string;
  label?: string;
  project?: string;
}

export default function NextStep({ to, label, project }: NextStepProps) {
  return (
    <div className="nextStep">
      <Link className="button button--primary button--lg nextStep__button" to={to}>
        {label || 'Siguiente paso →'}
      </Link>
      {project && (
        <div className="nextStep__project">
          <span className="muted">O explora el proyecto relacionado: </span>
          <Link to={project}>{project}</Link>
        </div>
      )}
    </div>
  );
}
