/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Container } from '@chakra-ui/react';
import { useContext } from 'react';

import IntervenantForm from './IntervenantForm';
import { IntervenantContext } from '../contexts/IntervenantContext';

const IntervenantEditPage = ({ match }) => {
  const {
    records,
  } = useContext(IntervenantContext);

  const Intervenant = records.find((data) => data.id === match.params.id);

  return (
    <Container maxWidth="container.lg" centerContent>
      <IntervenantForm {...Intervenant} />
    </Container>
  );
};

export default IntervenantEditPage;
