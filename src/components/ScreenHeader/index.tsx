import * as React from 'react';
import * as classNames from 'classnames';

import './styles.css';

export interface ScreenHeaderProps {
  text: string;
  subText?: string;
  clearBottomMargin?: boolean;
}

export const ScreenHeader: React.SFC<ScreenHeaderProps> =
  ({ text, subText, clearBottomMargin }) => {
    return (
      <header className={classNames('screen-header', { 'clear-bottom-margin': clearBottomMargin })}>
        <h1>{text}</h1>
        {subText ? <h2>{subText}</h2> : null}
      </header>
    );
  };
