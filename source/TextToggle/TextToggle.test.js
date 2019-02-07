import React from 'react';
import { shallow, mount, render } from 'enzyme';

import TextToggle from './TextToggle';

describe('<MyComponent />', () => {
  it('renders 1 <TextToggle /> components', () => {
    const wrapper = shallow(<TextToggle />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders 1 <TextToggle /> components', () => {
    const wrapper = shallow(<TextToggle />);
    expect(wrapper.text()).toEqual('TextToggle');
  });
});