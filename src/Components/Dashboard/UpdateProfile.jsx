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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { server } from '../../Redux/store';
import { useDispatch } from 'react-redux';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          `${server}/users/showme/${user.userId}`,
          {
            withCredentials: true,
          }
        );

        const currentUser = response.data;
        setName(currentUser.name);
        setEmail(currentUser.email);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${server}/users/updateUser`,
        { name, email },
        { withCredentials: true }
      );

      const updatedUser = response.data.user;
      dispatch({ type: 'updateUserData', payload: updatedUser });

      // success toast
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been successfully updated!',
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
        description: 'An error occurred while updating your profile.',
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
              Edit Profile
            </Heading>
          </HStack>

          <VStack spacing={'8'} w={'100%'}>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type={'text'}
              focusBorderColor="#25aae1"
              color={'white'}
            />

            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type={'email'}
              focusBorderColor="#25aae1"
              color={'white'}
            />
            {/* <Input
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              type={'text'}
              focusBorderColor="#25aae1"
              color={'white'}
            /> */}

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

export default UpdateProfile;
