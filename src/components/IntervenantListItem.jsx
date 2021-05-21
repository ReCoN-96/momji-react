/* eslint-disable react/prop-types */
import {
  Tr,
  Td,
} from '@chakra-ui/react';
import moment from 'moment';

const IntervenantListItem = ({
  profile, email, address, registered, isActive,
}) => (
  <Tr>
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
