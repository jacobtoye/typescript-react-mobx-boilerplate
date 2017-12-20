import * as React from 'react';
import { inject, observer } from 'mobx-react';

const Fragment = (React as any).Fragment;

import { BootingState, Stores } from 'enums';
import { Home as HomeScreen } from 'screens';
import {
  UiStateStore,
  UserStore,
} from 'stores';

@inject(Stores.AUTH, Stores.UI_STATE, Stores.USER)
@observer
export class Home extends React.Component<any, any> {
  async componentDidMount() {
    const uiStore = this.props[Stores.UI_STATE] as UiStateStore;
    const userStore = this.props[Stores.USER] as UserStore;

    // If we have already started booting the app then don't do again
    if (uiStore.bootingState !== BootingState.INITIAL)
      return;

    try {
      uiStore.setBooting(BootingState.IN_PROGRESS);

      await userStore.fetch();

      uiStore.setBooting(BootingState.FINISHED);
    } catch {
      // TODO: handle errors
    }
  }

  render() {
    const uiStore = this.props[Stores.UI_STATE] as UiStateStore;
    const showLoading = uiStore.bootingState !== BootingState.FINISHED;

    return (
      <HomeScreen showLoading={showLoading} />
    );
  }
}

export default Home;
