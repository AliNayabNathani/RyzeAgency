import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';
import BannerImage from '../../Assets/Images/LandingBanner.png';
import TrustPilotImg from '../../Assets/Images/trustpilot2_mzllao.svg';
import { ReactComponent as BoostSM } from '../../Assets/Icons/boost_your_sm.svg';
import AnonIcon from '../../Assets/Icons/anon.png';
import { ReactComponent as Youtube } from '../../Assets/Icons/social-media/youtube.svg';
import { ReactComponent as Instagram } from '../../Assets/Icons/social-media/instagram.svg';
import { ReactComponent as Twitter } from '../../Assets/Icons/social-media/twitch.svg';
import { ReactComponent as Twitch } from '../../Assets/Icons/social-media/twitch.svg';
import { ReactComponent as Tiktok } from '../../Assets/Icons/social-media/tiktok.svg';
import { ReactComponent as Spotify } from '../../Assets/Icons/social-media/spotify.svg';

const Home = () => {
  const socialMediaButtons = [
    { icon: Youtube, text: 'Youtube' },
    { icon: Instagram, text: 'Instagram' },
    { icon: Twitter, text: 'Twitter' },
    { icon: Twitch, text: 'Twitch' },
    { icon: Tiktok, text: 'Tiktok' },
    { icon: Spotify, text: 'Spotify' },
  ];

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
        w={'100%'}
        mt={[10, 20]}
        alignItems={['center', 'flex-start']}
        justifyContent={'space-between'}
      >
        <VStack w={'40%'} alignItems={['center', 'flex-start']}>
          <Image src={TrustPilotImg} w={'225px'} h={'80px'} />
          <Heading color={'white'} fontSize={['4xl', '6xl']}>
            Cheapest & Best
          </Heading>
          <Heading color={'#25aae1'} fontSize={['4xl', '6xl']}>
            SMM
          </Heading>
          <Heading color={'white'} fontSize={['4xl', '6xl']}>
            Panel
          </Heading>
          <Button
            mt={4}
            color={'white'}
            bg={'#25aae1'}
            _hover={{ bg: '#167AA3' }}
            borderRadius={'full'}
            w={{ base: 'auto', md: '100%', lg: '40%' }}
            p={[6, 6]}
          >
            <Icon as={BoostSM} mr={2} />
            Boost Your SM
          </Button>
          <Button
            mt={4}
            color={'white'}
            border={'1px solid #25aae1'}
            borderRadius={'full'}
            w={{ base: 'auto', md: '100%', lg: '40%' }}
            p={[6, 6]}
            variant={'outline'}
            _hover={{ bg: '#25aae1' }}
          >
            <Image
              src={AnonIcon}
              w={'24px'}
              mr={2}
              //   display={['none', 'block']}
            />
            Anonymous Order
          </Button>
        </VStack>
        <Image
          src={BannerImage}
          alt="banner"
          w={'auto'}
          h={'auto'}
          maxW={['auto', '800px']}
          maxH={['auto', '560px']}
          mt={[8, 0]}
        />
      </Stack>
      <Stack
        w={'100%'}
        mt={[4, 6]}
        border={'3px solid #25aae1'}
        borderRadius={'10px'}
        bg={'#050317'}
        p={[4, 8]}
        alignItems={'center'}
      >
        <Heading color={'white'}>Supported Services</Heading>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(6, 1fr)',
          ]}
          gap={[4, 8]}
          w={'80%'}
          justifyContent={'space-between'}
        >
          {socialMediaButtons.map((button, index) => (
            <Box
              key={index}
              mt={4}
              color={'white'}
              border={'2px solid #25aae1'}
              borderRadius={'full'}
              p={[2, 4]}
            >
              <HStack alignItems={'center'} textAlign={'center'}>
                <Icon as={button.icon} mr={2} />
                <Text color={'white'}>{button.text}</Text>
              </HStack>
            </Box>
          ))}
        </Grid>
        <Button
          mt={4}
          color={'white'}
          bg={'#25aae1'}
          _hover={{ bg: '#167AA3' }}
          borderRadius={'full'}
          w={{ base: 'auto', md: '80%', lg: '80%' }}
          p={[6, 8]}
          fontFamily={'monospace'}
          fontSize={'xl'}
          letterSpacing={2}
        >
          Boost Your SM
        </Button>
      </Stack>
      <Stack mt={[8, 16]} w={'100%'} p={[4, 8]} alignItems={'center'}>
        <Heading color={'#25aae1'} fontStyle={'italic'} fontSize={['sm', 'md']}>
          Three Easy Steps
        </Heading>
        <Heading color={'white'} fontSize={['lg', '2xl']}>
          How it all works
        </Heading>
        <Stack
          mt={[4, 8]}
          direction={['column', 'row']}
          w={'100%'}
          textAlign={['center', 'left']}
          justifyContent={'space-between'}
        >
          <Stack
            direction={['column', 'row']}
            alignItems={['center', 'flex-start']}
            w={['100%', '20%']}
          >
            <Heading color={'#25aae1'}>01</Heading>
            <VStack>
              <Heading as={'h5'} color={'white'} fontSize={'19px'}>
                Choose your desired social media platform
              </Heading>
              <Text color={'white'} as={'p'} lineHeight={'27px'}>
                Select the social media platform where you want to promote your
                content. We offer a variety of services for Instagram, Facebook,
                TikTok, Twitter, and more.
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={['column', 'row']}
            alignItems={['center', 'flex-start']}
            w={['100%', '19%']}
          >
            <Heading color={'#25aae1'}>02</Heading>
            <VStack>
              <Heading as={'h5'} color={'white'} fontSize={'19px'}>
                Choose the type of service you need
              </Heading>
              <Text color={'white'} as={'p'} lineHeight={'27px'}>
                Select the type of service you need for your social media
                account, such as followers, likes, comments, views, and more.
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={['column', 'row']}
            alignItems={['center', 'flex-start']}
            w={['100%', '30%']}
          >
            <Heading color={'#25aae1'}>03</Heading>
            <VStack>
              <Heading as={'h5'} color={'white'} fontSize={'19px'}>
                Enter your order details and complete the payment
              </Heading>
              <Text color={'white'} as={'p'} lineHeight={'27px'}>
                Enter the details of your order, such as the number of followers
                or likes you need, and complete the payment process using one of
                our supported cryptocurrencies. Once the payment is confirmed,
                sit back and relax while our team delivers your order.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        w={'100%'}
        mt={[4, 6]}
        border={'3px solid #25aae1'}
        borderRadius={'30px'}
        bg={'#050317'}
        p={[4, 8]}
        alignItems={'center'}
      >
        <Heading color={'white'}>Do you want to become a Reseller? 💸</Heading>
        <Text
          as={'p'}
          fontSize={'20px'}
          textAlign={'center'}
          color={'white'}
          mt={[4, 6]}
        >
          Looking to start your own social media marketing business?
          <br /> <br />
          We've got you covered with our SMM Reseller Panels! For just $39 per
          month, you'll have access to a fully hosted panel with the ability to
          use your own custom domain, add multiple payment methods, and
          customize the design to fit your branding.
          <br /> <br />
          With our reseller panels, you can start selling our services to your
          own clients and make a profit. We handle the technical details, so you
          can focus on growing your business and making money.
          <br /> <br />
          Ready to get started? Sign up today and start your journey to becoming
          a successful social media marketer!
        </Text>
        <Button
          mt={6}
          color={'white'}
          bg={'#25aae1'}
          _hover={{ bg: '#167AA3' }}
          borderRadius={'full'}
          w={{ base: 'auto', md: '80%', lg: '80%' }}
          p={[6, 8]}
          fontFamily={'monospace'}
          fontSize={'xl'}
          letterSpacing={2}
        >
          Become A Reseller Now!
        </Button>
      </Stack>
      <Stack w={'100%'} my={[4, 8]}>
        <Stack
          w={'100%'}
          alignItems={'flex-start'}
          direction={['column', 'row']}
          spacing={[6, 8]}
        >
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box as="span" flex="1" textAlign="left" color={'white'}>
                    What is an SMM panel?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                An SMM panel is a website that offers social media marketing
                services such as followers, likes, views, comments, and more for
                various social media platforms. These services can help
                individuals and businesses increase their social media presence
                and engagement.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box as="span" flex="1" textAlign="left" color={'white'}>
                    How do I place an order on your SMM panel?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Placing an order on our SMM panel is easy. First, select the
                social media platform you want to order services for, such as
                Instagram or Tiktok. Then, choose the specific service you want,
                such as followers or likes, and enter the relevant details such
                as your account username or post URL. Finally, make your payment
                using one of our accepted cryptocurrencies, and your order will
                be processed within minutes.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Stack
          w={'100%'}
          alignItems={'flex-start'}
          direction={['column', 'row']}
          spacing={[6, 8]}
          mt={[8]}
        >
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box as="span" flex="1" textAlign="left" color={'white'}>
                    Is my information and account safe when using your SMM
                    panel?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, we take the security of our customers' information and
                accounts very seriously. We use advanced encryption and secure
                payment gateways to protect your personal and financial data,
                and we never ask for your social media account passwords.
                Additionally, our anonymous ordering option means you can place
                orders without having to register an account with us.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={'14px'}
                    color={'white'}
                  >
                    What if I encounter an issue with my order or have a
                    question about your services?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We provide support via our ticket system, Telegram, Discord, and
                email. Our support team is available 24/7 and will respond to
                your inquiries as quickly as possible through these channels.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Stack
          w={'100%'}
          alignItems={'flex-start'}
          direction={['column', 'row']}
          spacing={[6, 8]}
          mt={[8]}
        >
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box as="span" flex="1" textAlign="left" color={'white'}>
                    What is a Reseller Panel?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Introducing our SMMM Reseller Child Panels - the perfect
                solution for those who want to start their own SMM panel
                business and make a profit. With our fully white-labeled Child
                Panel, you can resell our top-notch SMM panel services to your
                own customers under your own brand name, all while we handle the
                orders for you. Our Child Panel option costs only $39 per month
                with no monthly order limit. This means you can have unlimited
                orders, making it an affordable and profitable option for anyone
                looking to start their own SMM panel business. You'll have full
                control over your panel, with the ability to customize it to
                meet your own unique needs. Ordering your Child Panel is easy -
                simply purchase a domain name for your panel, point it to our
                nameservers, and order from our Child Panel Order page. We'll
                have you up and running within 2-3 hours, and you'll be able to
                start selling our services to your customers immediately. You
                can even set your own prices with our profit percentage system,
                allowing you to make up to 500% profit on our services. Our
                Reseller Child Panels come with a wide range of features,
                including the ability to import all anonsmm.com services via
                API, multiple currency support, customizable payment gateways,
                tons of admin options, and a free HTTPS/SSL certificate. Plus,
                our free theme is customizable to fit your branding needs. If
                you need any assistance with your Child Panel, our dedicated
                support team is always available to help. With our Reseller
                Child Panels, you'll be able to start your own SMM panel
                business and make a profit in no time.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion
            allowMultiple
            w={['100%', '50%']}
            border={'1px solid #25aae1'}
            color={'white'}
          >
            <AccordionItem p={4}>
              <h2>
                <AccordionButton color={'#25aae1'}>
                  <Box as="span" flex="1" textAlign="left" color={'white'}>
                    Can I earn money?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                At AnonSMM.com, we offer our valued customers three ways to earn
                money online with our SMM panel: 1. Reselling our services
                directly from our panel: You can easily resell our services to
                your friends, co-workers, or online through your own shop. They
                place an order with you, and you place the order with us. 2.
                Reselling our services from a child panel: For a low monthly fee
                of just $39, you can order a child panel from us and start your
                own reselling business. With the child panel, you can set your
                own prices and keep all the profits. It's an automated service,
                and there's no limit on the number of orders you can place. 3.
                Making money with our affiliate program: You can share your
                unique referral link with your friends or anyone you want to
                refer to our panel. You'll earn a 10% commission on all their
                deposits for life, and if you become a top affiliate, your
                commission rate can go up to 15%. Take advantage of these three
                opportunities to earn with AnonSMM.com and start making money
                today!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Stack>
      <Stack
        marginInline={'auto'}
        w={['100%', '80%']}
        mt={[10, 6]}
        border={'3px solid #25aae1'}
        borderRadius={'10px'}
        bg={'#050317'}
        p={[8, 10]}
        alignItems={'center'}
        direction={['column', 'row']}
        justifyContent={'space-between'}
      >
        <Image src={TrustPilotImg} />
        <VStack
          w={['100%', '50%']}
          alignItems={['center', 'left']}
          mt={[10, 0]}
        >
          <Heading color={'white'} as={'h2'} fontSize={['2xl', '49px']}>
            Rated 5/5 stars on Trustpilot
          </Heading>
          <Button
            mt={4}
            color={'white'}
            bg={'#25aae1'}
            _hover={{ bg: '#167AA3' }}
            borderRadius={'full'}
            w={{ base: 'auto', md: '100%', lg: '40%' }}
            alignSelf={['center', 'baseline']}
            p={[6, 6]}
          >
            Read All Reviews
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Home;
