import {
  Menu,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu>
    <Box boxSize="100%" p={10} display="flex" justifyContent="center" alignItems="center">
      <Link to="/">
        <Image src="https://www.momji.fr/sites/default/files/logo/SA_to_Momji_80px_1.png" alt="Momji" />
      </Link>
      <Heading ml={10}>Test Technique Momji</Heading>
    </Box>
  </Menu>
);

export default Header;
