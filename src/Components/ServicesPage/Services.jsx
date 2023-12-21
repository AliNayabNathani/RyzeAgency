import React, { useState } from 'react';
import { Box, Button, Container, Input, Stack } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import Select from 'react-select';

const Services = () => {
  const options = [
    { value: 'twitchBits', label: 'Twitch Bits' },
    { value: 'twitchSubs', label: 'Twitch Subs' },
    { value: 'twitchAccounts', label: 'Twitch Accounts' },
    { value: 'twitchBundles', label: 'Twitch Bundles' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchInput, setSearchInput] = useState('');

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
  };

  return (
    <Container
      minH={'100vh'}
      maxW="90%"
      paddingY={[2, 4]}
      textAlign={['center', 'left']}
      bg={'#07041c'}
    >
      {/* SearchBar and Select */}
      <Stack
        direction={['column', 'row']}
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
        <Input
          placeholder="Search..."
          variant="filled"
          color="white"
          border={'1px solid white'}
          _placeholder={{ color: 'whiteAlpha.700' }}
          bg={'#1a172e'}
          focusBorderColor="white"
          _hover={{ bg: '#1a172e' }}
          w={['100%', '30%']}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </Stack>

      <Stack
        direction={['column', 'row']}
        mt={'8'}
        p={[4, 4]}
        w={'100%'}
        bg={'#1a172e'}
        justifyContent={['center', 'space-between']}
      >
        <TableContainer w={'100%'}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Service</Th>
                <Th>Description</Th>
                <Th>Price for 1000</Th>
                <Th>Min</Th>
                <Th>Max</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody color={'white'}>
              <Tr>
                <Td>1</Td>
                <Td>Instagram Followers</Td>
                <Td>
                  <Box
                    bg={'rgba(38, 34, 64, 0.5)'}
                    w={'fit-content'}
                    borderRadius={'full'}
                    p={4}
                  >
                    Cancel
                  </Box>
                </Td>
                <Td>$0.625</Td>
                <Td>10</Td>
                <Td>20000</Td>
                <Td color={'#db182c'}>More</Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default Services;
