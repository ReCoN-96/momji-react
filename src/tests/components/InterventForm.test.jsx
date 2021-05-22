/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import IntervenantForm from '../../components/IntervenantForm';
import intervenants from '../fixtures/intervenants';

test('should render IntervenantForm correctly', () => {
  const wrapper = renderer.create(<IntervenantForm />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

test('Should render IntervenantForm correctly with intervenant data', () => {
  const wrapper = renderer.create(<IntervenantForm {...intervenants[0]} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
