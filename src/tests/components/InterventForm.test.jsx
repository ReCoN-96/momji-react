/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import { waitFor } from '@testing-library/react';
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

test('Should call onSubmit prop for valid form submission', async () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<IntervenantForm {...intervenants[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit');
  await waitFor(() => expect(onSubmitSpy).toHaveBeenCalledWith({
    address: '930 Lewis Avenue, Bonanza, Idaho, 7682', email: 'jodie.copeland@gmail.com', profile: { firstName: 'Jodie', lastName: 'Copeland' },
  }));
});

test('Should not call onSubmit prop for invalid form submission', async () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<IntervenantForm onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit');
  await waitFor(() => expect(onSubmitSpy).not.toHaveBeenCalled());
});
