/* eslint-disable no-undef */
import { AccordionDescendantsProvider } from '@chakra-ui/accordion';
import { requestReducer } from '../../reducers/request';
import intervenants from '../fixtures/intervenants';

const defaultState = {
  status: 'REQUEST_STATUS.LOADING',
  records: [],
  error: null,
};

test('should get intervenants successfully', () => {
  const action = {
    type: 'GET_ALL_SUCCESS',
    records: intervenants[0],
  };
  const state = requestReducer(defaultState, action);
  expect(state).toEqual({
    error: null,
    records: {
      id: '5f182e5bb6d211f4ddd99e9b',
      profile: { firstName: 'Jodie', lastName: 'Copeland' },
      email: 'jodie.copeland@gmail.com',
      address: '930 Lewis Avenue, Bonanza, Idaho, 7682',
      registered: '2018-04-17T04:59:45.195Z',
      isActive: true,
    },
    status: 'success',
  });
});

test('should get failure', () => {
  const action = {
    type: 'GET_ALL_FAILURE',
    error: 'this was to happen...',
  };
  const state = requestReducer(defaultState, action);
  expect(state).toEqual({
    error: 'this was to happen...',
    records: [],
    status: 'error',
  });
});

test('should get failure', () => {
  const action = {
    type: 'GET_ALL_FAILURE',
    error: 'this was to happen...',
  };
  const state = requestReducer(defaultState, action);
  expect(state).toEqual({
    error: 'this was to happen...',
    records: [],
    status: 'error',
  });
});
