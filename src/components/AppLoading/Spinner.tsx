import * as React from 'react';

import './spinner.css';

export interface SpinnerProps {
  /* empty */
}

export const Spinner: React.SFC<SpinnerProps> = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  );
};

export default Spinner;
