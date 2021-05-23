/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import IntervenantForm from '../../components/IntervenantForm';
import intervenants from '../fixtures/intervenants';

test('should render IntervenantForm correctly', () => {
  const wrapper = shallow(<IntervenantForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render IntervenantForm correctly with intervenant data', () => {
  const wrapper = shallow(<IntervenantForm {...intervenants[0]} />);
  expect(wrapper).toMatchSnapshot();
});

// test('Should render IntervenantForm correctly with intervenant data', () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(
//     <IntervenantForm {...intervenants[0]} onSubmit={onSubmitSpy} />,
//   );
//   const testInstance = wrapper.root;
//   console.log(testInstance.find('Form'));
//   expect(onSubmitSpy).toHaveBeenLastCalledWith({ ...intervenants[0] });
// });
