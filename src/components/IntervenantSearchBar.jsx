/* eslint-disable react/prop-types */
import { Input, Box } from '@chakra-ui/react';

const IntervenantSearchBar = ({ searchQuery, setSearchQuery }) => (
  <Box>
    <Input
      placeholder="Search by name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </Box>
);

export default IntervenantSearchBar;
