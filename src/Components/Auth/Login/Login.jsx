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
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/actions/user';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const handleShowPassword = () => setShow(!show);

  const { message, error, isAuthenticated, user } = useSelector(
    state => state.user
  );

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLogin = e => {
    // e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      toast({
        title: 'Login Failed',
        description: error,
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      dispatch({ type: 'clearError' });
    }
    if (message && isAuthenticated) {
      navigate('/');
      toast({
        title: 'Login Successful!',
        description: `Welcome Back ${user.name}`,
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

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
                focusBorderColor="#db182c"
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
                focusBorderColor="#db182c"
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
                handleLogin();
              }}
            >
              Sign In
            </Button>
            <Divider borderColor="white" mt={4} mb={4} />
            <HStack alignItems={'center'} justifyContent={'center'}>
              <Text color="gray.300" textAlign="center" opacity={'0.4'}>
                No account yet?
              </Text>
              <ChakraLink
                as={RouterLink}
                to="/register"
                color="white"
                textDecoration="underline"
              >
                Register
              </ChakraLink>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
