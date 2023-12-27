import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { server } from '../../Redux/store';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${server}/users/updateUserPassword`,
        { oldPassword, newPassword },
        { withCredentials: true }
      );

      console.log('res', response);

      toast({
        title: 'Profile Updated',
        description: 'Your password has been successfully updated!',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while updating your password.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container
      minH={'100vh'}
      maxW="90%"
      paddingY={[2, 4]}
      textAlign={['center', 'left']}
      bg={'#07041c'}
    >
      <Stack
        alignItems={'center'}
        w={['100%', '40%']}
        marginInline={'auto'}
        bg={'rgb(26, 23, 46)'}
        p={6}
        borderRadius={'20px'}
      >
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <HStack alignItems={'center'} justifyContent={'center'}>
            <EditIcon color={'white'} boxSize={8} mr={4} />
            <Heading
              my={'16'}
              textAlign={['center', 'center']}
              textTransform="uppercase"
              color={'white'}
            >
              Change Password
            </Heading>
          </HStack>

          <VStack spacing={'8'} w={'100%'}>
            <Input
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Old Password..."
              type={'password'}
              focusBorderColor="#25aae1"
              color={'white'}
            />

            <Input
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="New Password..."
              type={'password'}
              focusBorderColor="#25aae1"
              color={'white'}
            />
            <Button
              color={'white'}
              bg={'#25aae1'}
              _hover={{ bg: '#167AA3' }}
              borderRadius={'5px'}
              p={[6, 6]}
              type="submit"
              w={'100%'}
            >
              Update
            </Button>
          </VStack>
        </form>
      </Stack>
    </Container>
  );
};

export default ChangePassword;
