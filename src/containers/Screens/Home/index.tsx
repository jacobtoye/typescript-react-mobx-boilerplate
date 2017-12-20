import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from 'enums';
import { UserStore } from 'stores';
import { Home as HomeScreen } from 'screens';

export interface SetPinProps {
  /* empty, mobx stores will be injected */
}

export interface SetPinState {
  /* empty */
}

@inject(Stores.USER)
@observer
export class Home extends React.Component<SetPinProps, SetPinState> {
  render() {
    const userStore = this.props[Stores.USER] as UserStore;

    return (
      <HomeScreen name={`${userStore.user.firstName} ${userStore.user.lastName}`} />
    );
  }
}
