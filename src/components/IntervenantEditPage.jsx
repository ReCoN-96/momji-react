/* eslint-disable react/prop-types */
import { Container } from '@chakra-ui/react';

import IntervenantForm from './IntervenantForm';

const IntervenantEditPage = ({ match }) => {
  console.log(match.params.id);
  return (
    <Container maxWidth="container.lg" centerContent>
      <IntervenantForm />
    </Container>
  );
};

export default IntervenantEditPage;
