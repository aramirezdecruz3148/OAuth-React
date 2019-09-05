import React from 'react';
import { shallow } from 'enzyme';
import Farts from './Farts';

describe('Farts component', () => {
  it('renders Farts', () => {
    const wrapper = shallow(<Farts farts={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
