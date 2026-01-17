import React from 'react';

interface CheckpointProps {
  items: string[];
  title?: string;
}

export default function Checkpoint({ items, title = 'Si llegaste aquí, ya puedes...' }: CheckpointProps) {
  return (
    <div className="checkpoint">
      <h3 className="checkpoint__title">{title}</h3>
      <ul className="checkpoint__list">
        {items.map((item, index) => (
          <li key={index} className="checkpoint__item">
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
