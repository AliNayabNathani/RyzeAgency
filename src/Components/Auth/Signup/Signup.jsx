import {
  Box,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Divider,
  Text,
  HStack,
  Link as ChakraLink,
  Image,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye } from 'react-icons/ai';
import WebLogo from '../../../Assets/Images/Logo.png';
import { registerUser } from '../../../Redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const handleShowPassword = () => setShow(!show);

  const { message, error, loading } = useSelector(state => state.user);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = event => {
    setUserName(event.target.value);
  };

  const handleSignUp = async () => {
    await dispatch(registerUser(userName, email, password));

    setUserName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    // Clear message and error when the component mounts
    dispatch({ type: 'clearMessage' });
    dispatch({ type: 'clearError' });

    // ... (existing code)

    return () => {
      // Clear message and error when the component unmounts
      dispatch({ type: 'clearMessage' });
      dispatch({ type: 'clearError' });
    };
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast({
        title: 'Registration Successful!',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }

    if (error) {
      toast({
        title: 'Registration Failed',
        description: error.message,
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [message, error, toast]);

  return (
    <Container
      minH={'100vh'}
      maxW="90%"
      paddingY={[2, 4]}
      textAlign={['center', 'left']}
      bg={'#07041c'}
    >
      <Stack
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 12 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}
        bg={'rgb(26,23,46)'}
        marginInline={'auto'}
      >
        <Image src={WebLogo} marginInline={'auto'} />
        <Box as={'form'} bg={'rgb(26,23,46)'}>
          <Stack spacing={4}>
            <InputGroup>
              <Input
                placeholder="Enter Name"
                bg={'rgb(26,23,46)'}
                border="1px solid white"
                color="gray.300"
                _placeholder={{
                  color: 'gray.300',
                  opacity: '0.4',
                }}
                p="1.8rem"
                paddingLeft="1rem"
                focusBorderColor="#25aae1"
                value={userName}
                onChange={handleUsernameChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.25rem"
                //   marginRight="0.5rem"
                ml={2}
                mt={'0.65rem'}
                children={<AiOutlineMail />}
                opacity={'0.4'}
              />
              <Input
                placeholder="Enter Email"
                bg={'rgb(26,23,46)'}
                border="1px solid white"
                color="gray.300"
                _placeholder={{
                  color: 'gray.300',
                  opacity: '0.4',
                }}
                p="1.8rem"
                paddingLeft="3rem"
                focusBorderColor="#25aae1"
                value={email}
                onChange={handleEmailChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.25rem"
                //   marginRight="0.5rem"
                ml={2}
                mt={'0.65rem'}
                children={<AiOutlineLock />}
                opacity={'0.4'}
              />
              <Input
                placeholder="Enter Password"
                type={show ? 'text' : 'password'}
                bg={'rgb(26,23,46)'}
                border="1px solid white"
                color="gray.300"
                _placeholder={{
                  color: 'gray.300',
                  opacity: '0.4',
                }}
                p="1.8rem"
                paddingLeft="3rem"
                focusBorderColor="#25aae1"
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement
                _hover={{
                  cursor: 'pointer',
                }}
                color="gray.300"
                fontSize="1.25rem"
                ml={2}
                mt={'0.65rem'}
                opacity={'0.4'}
              >
                <Box as={AiOutlineEye} onClick={handleShowPassword} />
              </InputRightElement>
            </InputGroup>
            <Button
              fontFamily={'heading'}
              p={6}
              mt={2}
              w={'full'}
              bg={'#25aae1'}
              color={'white'}
              _hover={{
                boxShadow: 'xl',
              }}
              borderRadius={'20px'}
              onClick={() => {
                handleSignUp();
              }}
              isLoading={loading}
            >
              Create Account
            </Button>
            <Divider borderColor="white" mt={4} mb={4} />
            <HStack alignItems={'center'} justifyContent={'center'}>
              <Text color="gray.300" textAlign="center" opacity={'0.4'}>
                Already have an account
              </Text>
              <ChakraLink
                as={RouterLink}
                to="/login"
                color="white"
                textDecoration="underline"
              >
                Sign in
              </ChakraLink>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Signup;
