import * as React from 'react';

import { Button } from 'components';
import { Routes } from 'enums';

import './styles.css';

export interface LoginProps {
  performLogin: () => void;
}

export const Login: React.SFC<LoginProps> = ({ performLogin }) => {
  return (
    <div className="login">
      <Button onClick={performLogin}>Login</Button>
    </div>
  );
};

export default Login;
