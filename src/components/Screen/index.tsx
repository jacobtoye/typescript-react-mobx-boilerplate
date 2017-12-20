import * as React from 'react';
import * as classNames from 'classnames';

import './styles.css';

export interface ScreenProps {
  className?: string;
}

export const Screen: React.SFC<ScreenProps> = ({ className = null, children }) => {

  return (
    <div className={classNames('screen', className)}>
      {children}
    </div>
  );
};
