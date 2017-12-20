import * as React from 'react';
import { inject, observer } from 'mobx-react';

const Fragment = (React as any).Fragment;

import {
  AppLoading,
  Sidebar,
  SidebarBottomContainer,
  SidebarNavItem,
} from 'components';
import { BootingState, Routes, Stores } from 'enums';
import {
  UiStateStore,
  UserStore,
} from 'stores';
import { Screens } from '../Screens';

@inject(Stores.AUTH, Stores.UI_STATE, Stores.USER)
@observer
export class AuthedApp extends React.Component<any, any> {
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

    // This is kind of not nice. Not sure how to make better. i guess this should be a component
    // rather than a container. Keep the componentDidMount stuff.
    return (
      <Fragment>
        <AppLoading visible={showLoading} />
        <Sidebar title="MAH BERLERPLERT">
          <SidebarNavItem
            key={Routes.HOME}
            to={Routes.HOME}
            text="Home"
          />
          <SidebarNavItem
            key={Routes.PROFILE}
            to={Routes.PROFILE}
            text="Profile"
          />
          <SidebarBottomContainer>
            <SidebarNavItem
              key={Routes.LOGOUT}
              to={Routes.LOGOUT}
              text="Sign out"
            />
          </SidebarBottomContainer>
        </Sidebar>
        <Screens />
      </Fragment>
    );
  }
}

export default AuthedApp;
