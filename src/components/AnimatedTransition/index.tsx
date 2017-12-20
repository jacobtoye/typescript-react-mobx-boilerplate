import * as React from 'react';
import * as classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

import { AnimationTypes, TransitionState } from 'enums';

import './styles.css';

export interface AnimatedTransitionProps {
  enterAnimation?: AnimationTypes;
  exitAnimation?: AnimationTypes;
  duration?: number;
  visible: boolean;
}

export const AnimatedTransition: React.SFC<AnimatedTransitionProps> =
  ({ enterAnimation = '', exitAnimation = '', duration = 250, visible, children }) => {
    const getAnimatedChildren = (state) => {
      const cssClasses = classNames({
        animated: true,
        exited: state === TransitionState.Exited,
        [enterAnimation]: state === TransitionState.Entering || state === TransitionState.Entered,
        [exitAnimation]: state === TransitionState.Exiting,
      });
    
      return (
        <div className={cssClasses} style={{ animationDuration: `${duration}ms` }}>
          {children}
        </div>
      );
    };

    return (
      <Transition in={visible} timeout={duration}>
        {state => getAnimatedChildren(state)}
      </Transition>
    );
  };
