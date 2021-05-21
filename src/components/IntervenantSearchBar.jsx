import PropTypes from 'prop-types';
import { Input, Box } from '@chakra-ui/react';

const IntervenantSearchBar = ({ searchQuery, setSearchQuery }) => (
  <Box w="100%" display="flex" justifyContent="flex-end">
    <Input
      placeholder="Search by name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      w="20%"
      size="sm"
    />
  </Box>
);

IntervenantSearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default IntervenantSearchBar;
