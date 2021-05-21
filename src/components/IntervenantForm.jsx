import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Box,
  Button,
} from '@chakra-ui/react';

const IntervenantForm = () => (
  <Box w="50%" p={6} border="1px" borderColor="gray.200" borderRadius="40px">
    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input mb={2} type="text" />

      <FormLabel>Last name</FormLabel>
      <Input mb={2} type="text" />

      <FormLabel>Email address</FormLabel>
      <Input mb={2} type="email" />

      <FormLabel>Home Address</FormLabel>
      <Input mb={2} type="text" />

      <FormLabel>Are you active ?</FormLabel>
      <RadioGroup mb={2} defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Yes
          </Radio>
          <Radio colorScheme="green" value="2">
            No
          </Radio>
        </Stack>
      </RadioGroup>
      <Box display="flex" justifyContent="flex-end">
        <Button colorScheme="blue">Save</Button>
      </Box>
    </FormControl>
  </Box>
);

export default IntervenantForm;
