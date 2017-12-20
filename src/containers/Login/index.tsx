import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { RouterStore } from 'mobx-react-router';

import { Stores } from 'enums';
import { Login as LoginScreen } from 'screens';
import { AuthStore } from 'stores';

@withRouter
@inject(Stores.ROUTER, Stores.AUTH)
@observer
export class Login extends React.Component<any, any> {
  componentDidMount() {
    const authStore = this.props[Stores.AUTH] as AuthStore;
    const routerStore = this.props[Stores.ROUTER] as RouterStore;

    if (authStore.isLoggedIn)
      routerStore.history.replace('/');
  }

  render() {
    const authStore = this.props[Stores.AUTH] as AuthStore;

    return <LoginScreen performLogin={authStore.login} />;
  }
}

export default Login;
