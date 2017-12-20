import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router';
import { RouterStore } from 'mobx-react-router';

import { withAuthorization } from 'components';
import { Routes, Stores } from 'enums';
import { Profile } from 'screens';
import { AuthStore } from 'stores';
import { Home } from './Home';

const AuthedHome = withAuthorization(Home);
const AuthedProfile = withAuthorization(Profile);

export interface ScreensContainerProps {
  /* empty */
}

@withRouter
@inject(Stores.AUTH)
@observer
export class Screens extends React.Component<ScreensContainerProps, {}> {
  render() {
    const authStore = this.props[Stores.AUTH] as AuthStore;
    const isLoggedIn = authStore.isLoggedIn;

    /* tslint:disable:jsx-no-lambda jsx-no-multiline-js */
    return (
      <Switch>
        <Route
          path={Routes.HOME}
          render={() => (
            <AuthedHome isLoggedIn={isLoggedIn} />
          )}
        />
        <Route
          path={Routes.PROFILE}
          render={() => (
            <AuthedProfile isLoggedIn={isLoggedIn} />
          )}
        />
        <Redirect exact={true} to={Routes.HOME} />
      </Switch>
    );
    /* tslint:enable:jsx-no-lambda jsx-no-multiline-js */
  }
}

export default Screens;
