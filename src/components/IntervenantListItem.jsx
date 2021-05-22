/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import {
  Tr,
  Td,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';

const IntervenantListItem = ({
  id, profile, email, address, registered, isActive,
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
    <Td>
      <Link to={`/edit/${id}`}><EditIcon /></Link>
    </Td>
  </Tr>
);

IntervenantListItem.propTypes = {
  id: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  registered: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default IntervenantListItem;
