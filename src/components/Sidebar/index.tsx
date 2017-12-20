import * as React from 'react';

import './styles.css';

export interface SidebarProps {
  title: string;
}

export const Sidebar: React.SFC<SidebarProps> = (props) => {
  return (
    <aside className="sidebar">
      <div className="title-container">
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </aside>
  );
};
