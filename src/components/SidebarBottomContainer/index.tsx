import * as React from 'react';

import './styles.css';

export interface SidebarBottomContainerProps {
  /* empty */
}

export const SidebarBottomContainer: React.SFC<SidebarBottomContainerProps> = ({ children }) => {
  return (
    <div className="sidebar-bottom-container">
      {children}
    </div>
  );
};
