/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
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
import { useForm, Controller } from 'react-hook-form';

const IntervenantForm = () => {
  const {
    register, handleSubmit, control,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box w="50%" p={6} border="1px" borderColor="gray.200" borderRadius="40px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input mb={2} type="text" defaultValue="test" {...register('profile.firstName')} />
        </FormControl>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input mb={2} type="text" defaultValue="test" {...register('profile.lastName')} />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input mb={2} type="text" defaultValue="test" {...register('email')} />
        </FormControl>

        <FormControl>
          <FormLabel>Home Address</FormLabel>
          <Input mb={2} type="text" defaultValue="test" {...register('adress')} />
        </FormControl>

        <FormControl>
          <FormLabel>Are you active ?</FormLabel>
          <Controller
            name="isActive"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup mb={2} value={value} onChange={(e) => onChange(e === 'true')}>
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="blue" value={true}>
                    Yes
                  </Radio>
                  <Radio colorScheme="orange" value={false}>
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </FormControl>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" colorScheme="blue">Save</Button>
        </Box>
      </form>
    </Box>

  );
};

export default IntervenantForm;
