import * as React from 'react';

import { AnimationTypes } from 'enums';
import { AnimatedTransition } from 'components';
import Spinner from './Spinner';

import './styles.css';

export interface AppLoadingProps {
  text?: string;
  visible: boolean;
}

export const AppLoading: React.SFC<AppLoadingProps> = ({ text = 'loading', visible }) => {
  return (
    <AnimatedTransition
      visible={visible}
      enterAnimation={AnimationTypes.INSTANT_IN}
      exitAnimation={AnimationTypes.FADE_OUT}
    >
      <div className="app-loading">
        <Spinner />
        <div className="label">
          {text}
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default AppLoading;
