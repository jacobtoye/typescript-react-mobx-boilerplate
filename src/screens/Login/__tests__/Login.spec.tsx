import * as React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../index';

describe('Login', () => {
  it('should render correctly', () => {
    const performLogin = jest.fn();
    const component = shallow(
      <Login performLogin={performLogin} />,
    );
    expect(component).toMatchSnapshot();
  });
});
