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
import React, { useEffect, useState } from 'react';
import { ReactComponent as OrderWallet } from '../../Assets/Icons/wallet.svg';
import { ReactComponent as OrderBag } from '../../Assets/Icons/shopping_bag.svg';
import DollarIcon from '../../Assets/Icons/DollarIcon.png';
import UserAvatar from '../../Assets/Images/User-avatar.jpg';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import { server } from '../../Redux/store';
import axios from 'axios';
import Loader from '../Layout/Loader/Loader';

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading1, setIsLoading1] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${server}/users/showme/${user.userId}`,
        {
          withCredentials: true,
        }
      );

      setUserData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setIsLoading(false);
    }
  };

  const fetchTotalOrders = async () => {
    try {
      const response = await axios.get(
        `${server}/order/my-orders?status=pending`,
        {
          withCredentials: true,
        }
      );

      setOrderData(response.data.totalCount);
      console.log('RES', response.data);
      setIsLoading1(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setIsLoading1(false);
    }
  };

  useEffect(() => {
    if (user && user.userId) {
      fetchUserData();
      fetchTotalOrders();
    }
  }, [user]);

  if (isLoading && isLoading1) {
    return <Loader />;
  }

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
                $ {userData.funds}
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
                {orderData ?? 0}
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
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Name
            </Text>
            <Text color={'white'}>{userData.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'} color={'white'}>
              Email
            </Text>
            <Text color={'white'}>{userData.email}</Text>
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
            <Text color={'white'}>
              {new Date(userData.createdAt).toLocaleDateString('en-GB')}
            </Text>
          </HStack>
          <Button
            color={'white'}
            bg={'#25aae1'}
            _hover={{ bg: '#167AA3' }}
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
                bg={'#25aae1'}
                _hover={{ bg: '#167AA3' }}
                borderRadius={'5px'}
                p={[6, 6]}
              >
                Edit Profile
              </Button>
            </Link>

            <Link to="/changepassword">
              <Button
                color={'white'}
                border={'1px solid #25aae1'}
                borderRadius={'5px'}
                p={[6, 6]}
                variant={'outline'}
                _hover={{ bg: '#25aae1' }}
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
