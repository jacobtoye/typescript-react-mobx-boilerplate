import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { RouterStore } from 'mobx-react-router';

import { Routes, Stores } from 'enums';
import { AuthStore } from 'stores';

@withRouter
@inject(Stores.ROUTER, Stores.AUTH)
@observer
export class Logout extends React.Component<any, any> {
  componentDidMount() {
    const authStore = this.props[Stores.AUTH] as AuthStore;
    const routerStore = this.props[Stores.ROUTER] as RouterStore;

    authStore.logout();

    routerStore.history.replace(Routes.LOGIN);
  }

  render() {
    return 'Logging out...';
  }
}

export default Logout;
