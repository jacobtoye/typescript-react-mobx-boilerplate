import * as React from 'react';

import {
  Screen,
  ScreenHeader,
} from 'components';

export interface HomeProps {
  name: string;
}

export interface HomeState {
  /* empty */
}

export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <Screen>
        <ScreenHeader text={`Welcome home ${this.props.name}`} />
      </Screen>
    );
  }
}

export default Home;
