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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye } from 'react-icons/ai';
import WebLogo from '../../../Assets/Images/Logo.png';

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);
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
                focusBorderColor="#db182c"
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
                focusBorderColor="#db182c"
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
