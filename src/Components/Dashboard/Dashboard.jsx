import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as OrderWallet } from '../../Assets/Icons/wallet.svg';
import { ReactComponent as OrderBag } from '../../Assets/Icons/shopping_bag.svg';
import DollarIcon from '../../Assets/Icons/DollarIcon.png';
import UserAvatar from '../../Assets/Images/User-avatar.jpg';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';

const Dashboard = ({ user }) => {
  console.log('USER' + user);
  return (
    <Container
      minH={'100vh'}
      maxW="90%"
      paddingY={[2, 4]}
      textAlign={['center', 'left']}
      bg={'#07041c'}
    >
      <Stack
        direction={['column', 'row']}
        my={10}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={[8, 20]}
      >
        <Stack
          bg={'rgb(26, 23, 46)'}
          borderRadius={'20px'}
          w={['100%', 'auto']}
        >
          <Stack
            p={6}
            alignItems={['center', 'flex-start']}
            direction={['column', 'row']}
            spacing={[4, 8]}
          >
            <Image src={DollarIcon} w={'30px'} h={'30px'} />
            <VStack alignItems={['center', 'flex-start']}>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                Your Wallet
              </Text>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                $100
              </Text>
            </VStack>
          </Stack>
        </Stack>

        <Stack
          bg={'rgb(26, 23, 46)'}
          borderRadius={'20px'}
          w={['100%', 'auto']}
        >
          <Stack
            p={6}
            alignItems={['center', 'flex-start']}
            direction={['column', 'row']}
            spacing={[4, 8]}
          >
            <Icon as={OrderWallet} boxSize={8} />
            <VStack alignItems={['center', 'flex-start']}>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                Your expenses
              </Text>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                $100
              </Text>
            </VStack>
          </Stack>
        </Stack>

        <Stack
          bg={'rgb(26, 23, 46)'}
          borderRadius={'20px'}
          w={['100%', 'auto']}
        >
          <Stack
            p={6}
            alignItems={['center', 'flex-start']}
            direction={['column', 'row']}
            spacing={[4, 8]}
          >
            <Icon as={OrderBag} boxSize={8} />
            <VStack alignItems={['center', 'flex-start']}>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                Your total orders
              </Text>
              <Text color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                3
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        justifyContent={'center'}
        direction={['column', 'row']}
        alignItems={['center', 'center']}
        spacing={['8', '16']}
        padding="8"
      >
        {/* <VStack>
          <Avatar boxSize={'48'} src={UserAvatar} />

          <Button
            mt={4}
            color={'white'}
            border={'1px solid #db182c'}
            borderRadius={'5px'}
            p={[6, 6]}
            variant={'outline'}
            _hover={{ bg: '#db182c' }}
          >
            Change Photo
          </Button>
        </VStack> */}
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Name
            </Text>
            <Text color={'white'}>Ali Nayab</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Email
            </Text>
            <Text color={'white'}>nayabnathani6@gmail.com</Text>
          </HStack>
          {/* <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Phone Number
            </Text>
            <Text color={'white'}>03313999101</Text>
          </HStack> */}
          <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Created At
            </Text>
            <Text color={'white'}>22/12/23</Text>
          </HStack>
          <Button
            color={'white'}
            bg={'#db182c'}
            _hover={{ bg: '#e93c4e' }}
            borderRadius={'5px'}
            p={[6, 6]}
          >
            <AddIcon mr={2} />
            Add Funds
          </Button>
          <Stack
            direction={['column', 'row']}
            alignItems="center"
            mt={4}
            spacing={[6, 4]}
          >
            <Link to="/updateprofile">
              <Button
                color={'white'}
                bg={'#db182c'}
                _hover={{ bg: '#e93c4e' }}
                borderRadius={'5px'}
                p={[6, 6]}
              >
                Edit Profile
              </Button>
            </Link>

            <Link to="/changepassword">
              <Button
                color={'white'}
                border={'1px solid #db182c'}
                borderRadius={'5px'}
                p={[6, 6]}
                variant={'outline'}
                _hover={{ bg: '#db182c' }}
              >
                Change Password
              </Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
