import * as React from 'react';

import './styles.css';

export interface ButtonProps {
  disabled?: boolean;
  onClick?: (event: any) => void;
}

export const Button: React.SFC<ButtonProps> = ({ children, disabled = false, onClick }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
