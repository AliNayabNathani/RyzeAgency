import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();
    // await dispatch(updateProfile(name,email));
    // dispatch(loadUser());
    navigate('/dashboard');
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
              focusBorderColor="#db182c"
              color={'white'}
            />

            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type={'email'}
              focusBorderColor="#db182c"
              color={'white'}
            />
            <Input
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              type={'text'}
              focusBorderColor="#db182c"
              color={'white'}
            />

            <Button
              color={'white'}
              bg={'#db182c'}
              _hover={{ bg: '#e93c4e' }}
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
