/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Container } from '@chakra-ui/react';
import { useContext } from 'react';

import { REQUEST_STATUS } from '../reducers/request';
// eslint-disable-next-line import/no-named-as-default
import IntervenantForm from './IntervenantForm';
import { IntervenantContext } from '../contexts/IntervenantContext';

const IntervenantEditPage = ({ match }) => {
  const {
    records,
    status,
    error,
  } = useContext(IntervenantContext);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  const Intervenant = records.find((data) => data.id === match.params.id);

  return (
    <Container maxWidth="container.lg" centerContent>
      {hasErrored && error}
      {isLoading && 'Loading...'}
      {success && <IntervenantForm {...Intervenant} />}
    </Container>
  );
};

export default IntervenantEditPage;
