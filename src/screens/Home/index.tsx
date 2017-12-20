import * as React from 'react';

const Fragment = (React as any).Fragment;

import {
  AppLoading,
  Sidebar,
  SidebarBottomContainer,
  SidebarNavItem,
} from 'components';
import { Routes } from 'enums';

export interface HomeProps {
  showLoading: boolean;
}

export const Home: React.SFC<HomeProps> = ({ showLoading }) => {
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
      <div>TODO: Add different screens</div>
    </Fragment>
  );
};

export default Home;
