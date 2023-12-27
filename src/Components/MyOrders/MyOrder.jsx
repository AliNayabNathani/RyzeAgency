import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import searchImg from '../../Assets/Images/SearchIcon.png';
import orderIcon from '../../Assets/Images/orders-icon.png';
import { FaBox } from 'react-icons/fa';
import Select from 'react-select';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../Redux/store';

const MyOrder = () => {
  const [selectedService, setSelectedService] = useState(null);
  const options = [
    { value: 'pending', label: 'Pending' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'canceled', label: 'Canceled' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const navigate = useNavigate();
  const [userOrders, setUserOrders] = useState([]);
  const [order, setOrder] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}/order/my-orders`, {
        withCredentials: true,
        params: {
          status: selectedOption.value,
        },
      });
      console.log('RESPONSE', response.data);
      setUserOrders(response.data.userOrders);
      setOrder(response.data.userOrders.length > 0);
    } catch (error) {
      console.error('Error fetching My Orders:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const handleMakeOrderClick = () => {
    navigate('/order');
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#1a172e',
      border: '1px solid white',
      boxShadow: state.isFocused ? '0 0 0 2px #ffffff' : 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#07041c' : '#1a172e',
      color: 'white',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#1a172e',
    }),
    singleValue: provided => ({
      ...provided,
      color: 'white',
    }),
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
        bg={'rgb(26, 23, 46)'}
        direction={['column', 'row']}
        p={6}
        borderRadius={'10px'}
        marginInline={'auto'}
        alignItems={'center'}
      >
        {/* <Image src={orderIcon} w={'100px'} h={'100px'} color={'white'} /> */}
        <Icon as={FaBox} color={'white'} boxSize={8} mx={4} />
        <Heading color={'white'}>MY ORDERS</Heading>
      </Stack>
      {/* SearchBar and Select */}
      <Stack
        direction={['column', 'row']}
        my={8}
        p={[4, 4]}
        w={'100%'}
        bg={'#1a172e'}
        justifyContent={['center', 'space-between']}
      >
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          styles={customStyles}
        />
      </Stack>
      {order === true ? (
        <>
          <Stack
            bg={'rgb(26, 23, 46)'}
            direction={['column', 'row']}
            p={6}
            borderRadius={'10px'}
            marginInline={'auto'}
            mt={8}
          >
            <TableContainer w={'100%'}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Service</Th>
                    <Th>Amount</Th>
                    <Th>Price</Th>
                    <Th>Order Date</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody color={'white'}>
                  {userOrders.map((order, index) => (
                    <Tr key={order._id}>
                      <Td>{index + 1}</Td>
                      <Td>{order.category}</Td>
                      <Td>
                        {order.details.amount} {order.details.type}
                      </Td>
                      <Td>{order.totalPrice}</Td>
                      <Td>
                        {new Date(order.createdAt).toLocaleDateString('en-GB')}
                      </Td>
                      <Td>
                        <Box
                          bg={
                            order.status === 'pending'
                              ? 'yellow.500'
                              : order.status === 'delivered'
                              ? 'green.500'
                              : order.status === 'canceled'
                              ? 'red.500'
                              : 'gray.500'
                          }
                          w={'fit-content'}
                          borderRadius={'full'}
                          p={'1rem'}
                        >
                          {order.status}
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Stack>
        </>
      ) : (
        <>
          {' '}
          <Stack
            bg={'rgb(26, 23, 46)'}
            direction={['column', 'column']}
            p={6}
            borderRadius={'10px'}
            marginInline={'auto'}
            mt={8}
            alignItems={'center'}
          >
            <Image src={searchImg} w={'150px'} h={'150px'} mt={8} />
            <Heading color={'white'} mt={6}>
              You didn’t create any orders yet
            </Heading>
            <Heading
              color={'#25aae1'}
              onClick={handleMakeOrderClick}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              fontSize={['xl', '2xl']}
            >
              Make an order
            </Heading>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default MyOrder;
