import {
  Button,
  Container,
  Divider,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Select from 'react-select';

const NewOrder = () => {
  const serviceOptions = [
    { value: 'twitchBits', label: 'Twitch Bits' },
    { value: 'twitchSubs', label: 'Twitch Subs' },
    { value: 'twitchAccounts', label: 'Twitch Accounts' },
    { value: 'twitchBundles', label: 'Twitch Bundles' },
  ];

  const [selectedOption, setSelectedOption] = useState(serviceOptions[0]);
  const [profileLink, setProfileLink] = useState('');
  const [amount, setAmount] = useState('');

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#1a172e',
      border: '1px solid white',
      boxShadow: state.isFocused ? '0 0 0 2px #ffffff' : 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#07041c' : 'gray',
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
    container: provided => ({
      ...provided,
      width: '100%',
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
        direction={['column', 'row']}
        justifyContent={'space-between'}
        w={'90%'}
        marginInline={'auto'}
      >
        <Stack
          w={['100%', '60%']}
          bg={'rgb(26, 23, 46)'}
          p={6}
          borderRadius={'10px'}
        >
          <Text color={'white'} fontWeight={'bold'}>
            New order
          </Text>
          <VStack mt={6} w={'100%'} alignItems={['center', 'flex-start']}>
            <Text color={'white'} fontWeight={'bold'} mb={'2px'} mt={4}>
              Service
            </Text>
            <Select
              options={serviceOptions}
              value={selectedOption}
              onChange={setSelectedOption}
              styles={customStyles}
            />
            <Text color={'white'} fontWeight={'bold'} mb={'2px'} mt={4}>
              Link
            </Text>
            <Input
              placeholder="Search..."
              variant="filled"
              color="white"
              border={'1px solid white'}
              _placeholder={{ color: 'whiteAlpha.700' }}
              bg={'#1a172e'}
              focusBorderColor="#db182c"
              _hover={{ bg: '#1a172e' }}
              w={['100%', '100%']}
              value={profileLink}
              onChange={e => setProfileLink(e.target.value)}
            />
            <Text color={'white'} fontWeight={'bold'} mb={'2px'} mt={4}>
              Amount
            </Text>
            <Input
              placeholder="From 10 to 20000"
              variant="filled"
              color="white"
              border={'1px solid white'}
              _placeholder={{ color: 'whiteAlpha.700' }}
              bg={'#1a172e'}
              focusBorderColor="#db182c"
              _hover={{ bg: '#1a172e' }}
              w={['100%', '100%']}
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <Divider my={6} />
            <HStack w={'100%'} justifyContent={'space-between'}>
              <Text fontWeight={'bold'} color={'white'}>
                Amount - 100
              </Text>
              <Text fontWeight={'bold'} color={'white'}>
                $70.00
              </Text>
            </HStack>
            <Button
              mt={6}
              color={'white'}
              bg={'#db182c'}
              _hover={{ bg: '#e93c4e' }}
              borderRadius={'5px'}
              p={[6, 6]}
              w={'100%'}
            >
              Order
            </Button>
          </VStack>
        </Stack>

        <Stack
          bg={'rgb(26, 23, 46)'}
          p={6}
          borderRadius={'10px'}
          w={['100%', '40%']}
          h={'max-content'}
          spacing={4}
        >
          <Text color={'white'} fontWeight={'bold'}>
            Description
          </Text>
          <HStack justifyContent={'space-between'} mt={4}>
            <Text color={'white'} fontWeight={'bold'}>
              Service
            </Text>
            <Text color={'white'} fontWeight={'bold'}>
              123
            </Text>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text color={'white'} fontWeight={'bold'}>
              Price for 1000
            </Text>
            <Text color={'white'} fontWeight={'bold'}>
              $0.624
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NewOrder;
