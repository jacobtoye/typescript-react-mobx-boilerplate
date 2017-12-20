import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from 'enums';
import { UserStore } from 'stores';
import { Home as HomeScreen } from 'screens';

export interface HomeProps {
  /* empty, mobx stores will be injected */
}

export interface HomeState {
  /* empty */
}

@inject(Stores.USER)
@observer
export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const userStore = this.props[Stores.USER] as UserStore;

    return (
      <HomeScreen name={`${userStore.user.firstName} ${userStore.user.lastName}`} />
    );
  }
}
