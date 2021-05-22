/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from 'react';
import moment from 'moment';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

import { IntervenantContext } from '../contexts/IntervenantContext';
import { REQUEST_STATUS } from '../reducers/request';

import IntervenantListItem from './IntervenantListItem';
import IntervenantSearchBar from './IntervenantSearchBar';

const IntervenantListComponent = () => {
  const {
    records,
    status,
    error,
  } = useContext(IntervenantContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortByDate, setSortByDate] = useState(true);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

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
          {isLoading && (
          <Tr>
            <Td>Loading...</Td>
          </Tr>
          ) }
          {hasErrored && (
          <Tr>
            <Td>
              Loading error...
            </Td>
            <Td>
              ERROR:
              {error.message}
            </Td>
          </Tr>
          )}
          {success && (
          <>
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
          </>
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default IntervenantListComponent;
