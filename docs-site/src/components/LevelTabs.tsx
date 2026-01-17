import React, { useState, Children, isValidElement } from 'react';
import clsx from 'clsx';

interface LevelTabsProps {
  children: React.ReactNode;
  defaultTab?: number;
}

export default function LevelTabs({
  children,
  defaultTab = 0,
}: LevelTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Extract labels from children (works with MDX div elements)
  const tabs = Children.toArray(children)
    .filter((child) => isValidElement(child))
    .map((child) => {
      if (isValidElement(child)) {
        // Handle both div elements from MDX and custom Tab components
        const props = child.props as { label?: string; children?: React.ReactNode };
        if (props.label) {
          return {
            label: props.label,
            content: props.children,
          };
        }
      }
      return null;
    })
    .filter(Boolean) as Array<{ label: string; content: React.ReactNode }>;

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className="levelTabs">
      <div className="levelTabs__header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx('levelTabs__button', {
              'levelTabs__button--active': activeTab === index,
            })}
            onClick={() => setActiveTab(index)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="levelTabs__content">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}
