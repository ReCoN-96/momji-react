import { Container } from '@chakra-ui/react';
import IntervenantList from './IntervenantList';

const IntervenantDashboardPage = () => (
  <Container maxWidth="container.lg" centerContent>
    <IntervenantList />
  </Container>
);

export default IntervenantDashboardPage;
