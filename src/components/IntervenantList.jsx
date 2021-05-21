/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from 'react';
import moment from 'moment';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

import { IntervenantContext, IntervenantProvider } from '../contexts/IntervenantContext';

import IntervenantListItem from './IntervenantListItem';
import IntervenantSearchBar from './IntervenantSearchBar';

const IntervenantListComponent = () => {
  const {
    records,
  } = useContext(IntervenantContext);

  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [sortByDate, setSortByDate] = useState(true);

  return (
    <>
      <IntervenantSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Table variant="striped" colorScheme="facebook">
        <Thead>
          <Tr>
            <Th>
              FirstName
            </Th>
            <Th>LastName</Th>
            <Th>Mail</Th>
            <Th>Address</Th>
            <Th>
              <Flex direction="row">
                <Text>Registered</Text>
                <ArrowUpDownIcon
                  ml={1}
                  onClick={() => (sortByDate ? setSortByDate(false) : setSortByDate(true))}
                />
              </Flex>
            </Th>
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
            }).sort((a, b) => {
              if (!sortByDate) {
                return moment(a.registered) > moment(b.registered) ? 1 : -1;
              }
              return moment(a.registered) < moment(b.registered) ? 1 : -1;
            }).map((props) => (
              // eslint-disable-next-line react/prop-types
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
