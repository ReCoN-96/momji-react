/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
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
    <Td>{moment(registered).isValid() ? moment(registered).format('DD/MM/YYYY') : ''}</Td>
    <Td>
      {`${isActive}`}
    </Td>
  </Tr>
);

IntervenantListItem.propTypes = {
  profile: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  registered: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default IntervenantListItem;
