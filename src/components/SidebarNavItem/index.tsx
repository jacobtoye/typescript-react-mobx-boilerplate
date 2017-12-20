import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as classNames from 'classnames';

import './styles.css';

export interface SidebarNavItemProps {
  to: string;
  text: string;
  iconStyles?: any;
  className?: string;
}

export const SidebarNavItem: React.SFC<SidebarNavItemProps> = (props) => {
  let iconJsx = null;
  if (props.iconStyles) {
    iconJsx = (
      <div className="nav-icon">
        <div style={props.iconStyles} />
      </div>
    );
  }

  const cssClasses = classNames('sidebar-nav-item', props.className);

  return (
    <NavLink exact={true} to={props.to} className={cssClasses}>
      {iconJsx}
      <div className="nav-text">{props.text}</div>
    </NavLink>
  );
};
