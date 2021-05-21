/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from '@chakra-ui/react';
import { IntervenantContext, IntervenantProvider } from '../contexts/IntervenantContext';
import IntervenantListItem from './IntervenantListItem';

const IntervenantListComponent = () => {
  const {
    records,
  } = useContext(IntervenantContext);
  return (
    <Table variant="striped" colorScheme="facebook">
      <Thead>
        <Tr>
          <Th>FirstName</Th>
          <Th>LastName</Th>
          <Th>Mail</Th>
          <Th>Address</Th>
          <Th>Registered</Th>
          <Th>iSActive</Th>
        </Tr>
      </Thead>
      <Tbody>
        {records && records.map((props) => (
          <IntervenantListItem {...props} />
        ))}
      </Tbody>
    </Table>
  );
};

const IntervenantList = (props) => (
  <IntervenantProvider baseUrl="https://team.momji.fr/api/v2/static/employees">
    <IntervenantListComponent {...props} />
  </IntervenantProvider>
);

export default IntervenantList;
