import * as React from 'react';
import { shallow } from 'enzyme';

import { Profile } from '../index';

describe('Profile', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Profile />,
    );
    expect(component).toMatchSnapshot();
  });
});
