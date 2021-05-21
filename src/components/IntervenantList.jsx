/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from '@chakra-ui/react';

import { IntervenantContext, IntervenantProvider } from '../contexts/IntervenantContext';

import IntervenantListItem from './IntervenantListItem';
import IntervenantSearchBar from './IntervenantSearchBar';

const IntervenantListComponent = () => {
  const {
    records,
  } = useContext(IntervenantContext);

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <IntervenantSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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
          {records && records
            .filter((rec) => {
              const targetString = `${rec.profile.firstName} ${rec.profile.lastName}`.toLowerCase();
              return searchQuery.length === 0
                ? true
                : targetString.includes(searchQuery.toLowerCase());
            }).map((props) => (
              <IntervenantListItem key={props.id} {...props} />
            ))}
        </Tbody>
      </Table>
    </>
  );
};

const IntervenantList = (props) => (
  <IntervenantProvider baseUrl="https://team.momji.fr/api/v2/static/employees">
    <IntervenantListComponent {...props} />
  </IntervenantProvider>
);

export default IntervenantList;
