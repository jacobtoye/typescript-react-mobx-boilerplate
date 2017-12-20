import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router';

import { withAuthorization } from 'components';
import { Routes, Stores } from 'enums';
import { AuthedApp, Login, Logout } from 'containers';
import { AuthStore } from 'stores';

const AuthedAuthedApp = withAuthorization(AuthedApp);

@inject(Stores.AUTH)
@withRouter
@observer
export default class App extends React.Component<any, any> {
  render() {
    const authStore = this.props[Stores.AUTH] as AuthStore;

    /* tslint:disable:jsx-no-lambda jsx-no-multiline-js */
    return (
      <div className="app">
        <Switch>
          <Route path={Routes.LOGIN} component={Login} />
          <Route path={Routes.LOGOUT} component={Logout} />
          <Route path="/" component={() => <AuthedAuthedApp isLoggedIn={authStore.isLoggedIn} />} />
        </Switch>
      </div>
    );
    /* tslint:enable:jsx-no-lambda jsx-no-multiline-js */
  }
}
