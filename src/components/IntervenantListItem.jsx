/* eslint-disable react/prop-types */
import {
  Tr,
  Td,
} from '@chakra-ui/react';
import moment from 'moment';

const IntervenantListItem = ({
  id, profile, email, address, registered, isActive,
}) => (
  <Tr key={id}>
    <Td>{profile.firstName}</Td>
    <Td>{profile.lastName}</Td>
    <Td>{email}</Td>
    <Td>{address}</Td>
    <Td>{moment(registered).isValid() ? moment(registered).format('L') : 'unknow'}</Td>
    <Td>
      {`${isActive}`}
    </Td>
  </Tr>
);

export default IntervenantListItem;
