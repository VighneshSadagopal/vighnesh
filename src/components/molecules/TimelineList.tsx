// src/components/TimelineList.tsx
import React from "react";

type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

type TimelineListProps = {
  items: TimelineItem[];
};

export default function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="timeline-list">
      {items.map((item, index) => (
        <li key={index} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.period}</span>
          <p className="timeline-text">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
