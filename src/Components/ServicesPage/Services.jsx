import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
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

// Modal Component
const ServiceModal = ({ isOpen, onClose, service }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg={'#1a172e'} color={'white'}>
        <ModalHeader textAlign={'center'} my={4}>
          {service.service}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={'#1a172e'} color={'white'} p={8}>
          <Stack spacing={4} bg={'#1a172e'} color={'white'}>
            <Box>ID: {service.id}</Box>
            <Divider />
            <Box>Service: {service.service}</Box>
            <Divider />
            <Box>Description: {service.description.join(', ')}</Box>
            <Divider />
            <Box>Price: {service.price}</Box>
            <Divider />
            <Box>Min Quantity: {service.minQuantity}</Box>
            <Divider />
            <Box>Max Quantity: {service.maxQuantity}</Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const options = [
    { value: 'twitchBits', label: 'Twitch Bits' },
    { value: 'twitchSubs', label: 'Twitch Subs' },
    { value: 'twitchAccounts', label: 'Twitch Accounts' },
    { value: 'twitchBundles', label: 'Twitch Bundles' },
  ];

  const servicesData = [
    {
      id: 1,
      service: 'Twitch Subs',
      description: ['Cancel', 'Bots', 'Speed 5k Per Day'],
      price: '$0.625',
      minQuantity: 10,
      maxQuantity: 20000,
    },
    {
      id: 2,
      service: 'Twitch Subs Mix',
      description: ['Mix quality'],
      price: '$1.485',
      minQuantity: 10,
      maxQuantity: 500000,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchInput, setSearchInput] = useState('');

  const handleMoreClick = service => {
    setSelectedService(service);
    onOpen();
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
              {servicesData.map(service => (
                <Tr key={service.id}>
                  <Td>{service.id}</Td>
                  <Td>{service.service}</Td>
                  <Td>
                    <HStack>
                      {service.description.map((item, index) => (
                        <Box
                          key={index}
                          bg={'rgba(38, 34, 64, 0.5)'}
                          w={'fit-content'}
                          borderRadius={'full'}
                          p={4}
                        >
                          {item}
                        </Box>
                      ))}
                    </HStack>
                  </Td>
                  <Td>{service.price}</Td>
                  <Td>{service.minQuantity}</Td>
                  <Td>{service.maxQuantity}</Td>
                  <Td
                    color={'#db182c'}
                    onClick={() => handleMoreClick(service)}
                    cursor={'pointer'}
                  >
                    More
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Stack>
      {selectedService && (
        <ServiceModal
          isOpen={isOpen}
          onClose={onClose}
          service={selectedService}
        />
      )}
    </Container>
  );
};

export default Services;
