/* eslint-disable no-undef */
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = renderer.create(<Router><Header /></Router>).toJSON();
  expect(wrapper).toMatchSnapshot();
});
