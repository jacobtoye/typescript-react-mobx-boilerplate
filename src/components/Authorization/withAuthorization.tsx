import * as React from 'react';
import { Redirect } from 'react-router';

import { Routes } from 'enums';

export interface AuthorizationProps {
  isLoggedIn: boolean;
}

export const withAuthorization = <T extends {}>(WrappedComponent: React.ComponentClass<T>) => {
  return class extends React.Component<T & AuthorizationProps> {
    render() {
      return this.props.isLoggedIn ?
        <WrappedComponent {...this.props} /> :
        <Redirect to={Routes.LOGOUT} />;
    }
  };
};
