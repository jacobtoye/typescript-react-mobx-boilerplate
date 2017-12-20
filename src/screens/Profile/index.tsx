import * as React from 'react';

import {
  Screen,
  ScreenHeader,
} from 'components';

export interface ProfileProps {
  /* empty */
}

export interface ProfileState {
  /* empty */
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  render() {
    return (
      <Screen>
        <ScreenHeader text="Look a profile screen o.O" />
      </Screen>
    );
  }
}

export default Profile;
