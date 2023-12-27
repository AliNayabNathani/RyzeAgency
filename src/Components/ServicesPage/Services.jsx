import React, { useEffect, useState } from 'react';
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
import { ReactComponent as twtich } from '../../Assets/Icons/twitch-icon.svg';
import Select from 'react-select';
import axios from 'axios';
import { server } from '../../Redux/store';
import Loader from '../Layout/Loader/Loader';

// Modal Component
const ServiceModal = ({ isOpen, onClose, service }) => {
  const getServiceCategoryLabel = service => {
    switch (service.type) {
      case 'Bits':
        return 'Twitch Bits';
      case 'Subscribers':
        return 'Twitch Subscribers';
      case 'Accounts':
        return 'Twitch Accounts';
      case 'Bundles':
        return 'Twitch Bundles';
      default:
        return 'Unknown';
    }
  };

  const getAmountDisplay = service => {
    console.log('SERVICE', service);
    const { type, bits, subs, accounts } = service;

    switch (type) {
      case 'Bits':
        return service ? `${service.amount} bits` : 'Unknown';
      case 'Subscribers':
        return service ? `${service.amount} subscribers` : 'Unknown';
      case 'Accounts':
        return service ? `${service.amount} accounts` : 'Unknown';
      case 'Bundles':
        return accounts && bits && subs
          ? `${accounts.amount} accounts, ${bits.amount} bits, ${subs.amount} subscribers`
          : 'Unknown';
      default:
        return 'Unknown';
    }
  };

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
            <Box>ID: {service._id}</Box>
            <Divider />
            <Box>
              Service:{' '}
              {service.type === 'Bundles'
                ? service.name
                : getServiceCategoryLabel(service)}
            </Box>
            <Divider />
            <Box>Description: {service.description}</Box>
            <Divider />
            <Box>Price: {service.price}</Box>
            <Divider />
            <Box>Amount: {getAmountDisplay(service)}</Box>
            <Divider />
            {/* <Box>Max Quantity: {service.maxQuantity}</Box> */}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  const options = [
    { value: '', label: 'All' },
    { value: 'Twitch Bits', label: 'Twitch Bits' },
    { value: 'Twitch Subscribers', label: 'Twitch Subs' },
    { value: 'Twitch Accounts', label: 'Twitch Accounts' },
    { value: 'Twitch Bundles', label: 'Twitch Bundles' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/service`, {
          withCredentials: true,
          params: {
            category: selectedOption.value,
            search: searchInput,
          },
        });

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const slicedServices = response.data.services.slice(
          startIndex,
          endIndex
        );

        setServicesData(slicedServices);
        setTotalPages(Math.ceil(response.data.services.length / pageSize));
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedOption, searchInput, currentPage]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const getServiceCategoryLabel = service => {
    switch (service.type) {
      case 'Bits':
        return 'Twitch Bits';
      case 'Subscribers':
        return 'Twitch Subscribers';
      case 'Accounts':
        return 'Twitch Accounts';
      case 'Bundles':
        return 'Twitch Bundles';
      default:
        return 'Unknown';
    }
  };

  const getAmountDisplay = service => {
    // console.log('SERVICE', service);
    const { type, bits, subs, accounts } = service;
    const lineStyle = {
      marginBottom: '8px',
    };

    switch (type) {
      case 'Bits':
        return service ? `${service.amount} bits` : 'Unknown';
      case 'Subscribers':
        return service ? `${service.amount} subscribers` : 'Unknown';
      case 'Accounts':
        return service ? `${service.amount} accounts` : 'Unknown';
      case 'Bundles':
        return accounts && bits && subs ? (
          <div>
            <div style={lineStyle}>{accounts.amount} accounts</div>
            <div style={lineStyle}>{bits.amount} bits</div>
            <div style={lineStyle}>{subs.amount} subscribers</div>
          </div>
        ) : (
          'Unknown'
        );
      default:
        return 'Unknown';
    }
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                    <Th>Price</Th>
                    <Th>Amount</Th>
                    <Th>Max</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody color={'white'}>
                  {servicesData.map((service, index) => (
                    <Tr key={service._id}>
                      <Td>{index + 1}</Td>
                      <Td>
                        {service.type === 'Bundles'
                          ? service.name
                          : getServiceCategoryLabel(service)}
                      </Td>
                      <Td>
                        <HStack>
                          <Box
                            bg={'rgba(38, 34, 64, 0.5)'}
                            w={'fit-content'}
                            borderRadius={'full'}
                            p={4}
                          >
                            {service.description}
                          </Box>
                        </HStack>
                      </Td>
                      <Td>{service.price}</Td>
                      <Td>{getAmountDisplay(service)}</Td>
                      {/* <Td>{service.maxQuantity}</Td> */}
                      <Td
                        color={'#25aae1'}
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
          <Stack direction="row" mt={4} spacing={2} justify="center">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </Stack>
          {selectedService && (
            <ServiceModal
              isOpen={isOpen}
              onClose={onClose}
              service={selectedService}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Services;
