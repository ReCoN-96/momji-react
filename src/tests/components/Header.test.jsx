/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
