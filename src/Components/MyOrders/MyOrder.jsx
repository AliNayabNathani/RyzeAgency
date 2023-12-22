import {
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
import React from 'react';
import searchImg from '../../Assets/Images/SearchIcon.png';
import orderIcon from '../../Assets/Images/orders-icon.png';
import { FaBox } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
  const navigate = useNavigate();
  const order = false;
  const handleMakeOrderClick = () => {
    navigate('/order');
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
                  </Tr>
                </Thead>
                <Tbody color={'white'}>
                  <Tr>
                    <Td>1</Td>
                    <Td>Twitch Subs</Td>
                    <Td>100</Td>
                    <Td>$70.00</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Twitch Bits</Td>
                    <Td>3000</Td>
                    <Td>$10.00</Td>
                  </Tr>
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
              color={'#db182c'}
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
