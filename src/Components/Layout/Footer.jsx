import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import FooterLogo from '../../Assets/Images/Logo.png';
import { ReactComponent as Btc } from '../../Assets/Icons/btc.svg';
import { ReactComponent as Eth } from '../../Assets/Icons/eth.svg';
import { ReactComponent as Xmr } from '../../Assets/Icons/xmr.svg';
import { ReactComponent as Ltc } from '../../Assets/Icons/ltc.svg';
import { ReactComponent as Bnb } from '../../Assets/Icons/bnb.svg';
import { ReactComponent as Doge } from '../../Assets/Icons/doge.svg';
import { ReactComponent as Dash } from '../../Assets/Icons/dash.svg';
import { ReactComponent as Bch } from '../../Assets/Icons/bch.svg';
import { ReactComponent as Avax } from '../../Assets/Icons/avax.svg';
import { ReactComponent as Trx } from '../../Assets/Icons/trx.svg';
import { ReactComponent as Matic } from '../../Assets/Icons/matic.svg';
import { ReactComponent as Busd } from '../../Assets/Icons/busd.svg';
import { ReactComponent as Dai } from '../../Assets/Icons/dai.svg';
import { ReactComponent as Usdc } from '../../Assets/Icons/usdc.svg';
import { ReactComponent as Usdt } from '../../Assets/Icons/usdt.svg';
import { ReactComponent as CreditCard } from '../../Assets/Icons/credit-card-svgrepo-com_lutql1.svg';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const paymentMethods = [
    { icon: Btc },
    { icon: Eth },
    { icon: Xmr },
    { icon: Ltc },
    { icon: Bnb },
    { icon: Doge },
    { icon: Dash },
    { icon: Bch },
    { icon: Avax },
    { icon: Trx },
    { icon: Matic },
    { icon: Busd },
    { icon: Dai },
    { icon: Usdc },
    { icon: Usdt },
    { icon: CreditCard },
  ];

  return (
    <Box bg={'#07041C'} color={'gray.200'} alignItems={['center', 'left']}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>
              <Image src={FooterLogo} />
            </ListHeader>
            <Box as="p" href={'#'}>
              © Copyright 2023
            </Box>
          </Stack>

          {/* Navigation */}
          <Stack align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Box as="a" href={'#'} _hover={{ color: '#25aae1' }}>
              Services
            </Box>
            <Box as="a" href={'#'} _hover={{ color: '#25aae1' }}>
              API
            </Box>
            <Box as="a" href={'#'} _hover={{ color: '#25aae1' }}>
              Reviews
            </Box>
            <Box as="a" href={'#'} _hover={{ color: '#25aae1' }}>
              Your Own SMM Panel
            </Box>
          </Stack>

          {/* Dashboard */}
          <Stack align={'flex-start'}>
            <ListHeader>Dashboard</ListHeader>
            <Box as="a" href={'/login'} _hover={{ color: '#25aae1' }}>
              Login
            </Box>
            <Box as="a" href={'/register'} _hover={{ color: '#25aae1' }}>
              Register
            </Box>
            <Box as="a" href={'#'} _hover={{ color: '#25aae1' }}>
              Anonymous Order
            </Box>
          </Stack>

          {/* Telegram */}
          <Stack align={'flex-start'}>
            <ListHeader>Telegram</ListHeader>
            <Box
              as="a"
              href={'#'}
              _hover={{ color: 'white' }}
              color={'#25aae1'}
            >
              @RyzeAgency
            </Box>
          </Stack>

          {/* Payment Methods */}
          <Stack align={'flex-start'} display={['none', 'block']}>
            <ListHeader>Payment Methods</ListHeader>
            <Grid
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={2}
            >
              {paymentMethods.map((icons, index) => (
                <GridItem key={index} rowSpan={1} colSpan={1}>
                  <Icon as={icons.icon} boxSize={6} />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
