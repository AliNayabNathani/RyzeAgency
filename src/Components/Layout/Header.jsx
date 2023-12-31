import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import headerLogo from '../../Assets/Images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { logoutUser } from '../../Redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { server } from '../../Redux/store';
import axios from 'axios';

export default function WithSubnavigation({ isAuthenticated, user }) {
  const [name, setName] = useState('dsad');
  const navItems = isAuthenticated
    ? [
        {
          label: 'Dashboard',
          href: '/dashboard',
        },
        {
          label: 'Services',
          href: '/services',
        },
        {
          label: 'New Orders',
          href: '/order',
        },
        {
          label: 'My Orders',
          href: '/myorder',
        },
      ]
    : [
        {
          label: 'Services',
          href: '/services',
        },
      ];

  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const updatedUser = useSelector(state => state.user.user);
  // console.log('UPDATED', updatedUser);

  const handleClick = () => {
    navigate('/');
  };

  const handleNavigate = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <Box>
      <Flex
        bg={'#07041c'}
        color={'white'}
        minH={'60px'}
        py={{ base: 6 }}
        px={{ base: 4 }}
        // borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={'white'} />
              ) : (
                <HamburgerIcon w={5} h={5} color={'white'} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            src={headerLogo}
            maxW={'250px'}
            maxH={'34px'}
            w={['45px', 'auto']}
            h={['auto', 'auto']}
            mr={{ base: '75%', md: '6%', lg: '5%', xl: '15%' }}
            onClick={handleClick}
            cursor={'pointer'}
          />
          <Flex
            display={{ base: 'none', md: 'flex' }}
            // ml={{ base: 'none', lg: 'auto' }}
            marginInline={{ base: 'none', md: 'auto' }}
            // mr={'10%'}
          >
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>
        {isAuthenticated ? (
          <>
            <HStack spacing={{ base: '0', md: '6' }}>
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}
                    w={['auto', '195px']}
                  >
                    <HStack>
                      <Text
                        fontSize="md"
                        fontWeight={'semibold'}
                        display={{ base: 'none', md: 'flex' }}
                      >
                        {updatedUser.name}
                      </Text>
                      <Avatar
                        size={'sm'}
                        name={updatedUser.name}
                        color={'white'}
                        bg={'#25aae1'}
                      />
                      <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        // spacing="1px"
                        ml="-0.6rem"
                      ></VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList bg={'#07041c'} borderColor={'#07041c'}>
                    <MenuItem
                      onClick={handleLogout}
                      bg={'#07041c'}
                      _hover={{ bg: '#25aae1' }}
                    >
                      Sign out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </>
        ) : (
          <>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
            >
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'outline'}
                href={'#'}
                borderColor={'#25aae1'}
                color={'#25aae1'}
                _hover={{
                  color: 'white',
                  bg: '#167AA3',
                }}
                onClick={event => handleNavigate(event, '/register')}
              >
                Sign Up
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'none', lg: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#25aae1'}
                href={'#'}
                _hover={{
                  bg: '#167AA3',
                }}
                onClick={event => handleNavigate(event, '/login')}
              >
                Sign In
              </Button>
            </Stack>
          </>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ navItems }) => {
  const linkColor = 'white';
  const linkHoverColor = '#EDF2F7';
  const popoverContentBgColor = '#07041c';
  const currentPath = window.location.pathname;

  return (
    <Stack direction={'row'} spacing={8}>
      {navItems.map(navItem => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={{ base: 'md', md: 'sm', lg: 'lg' }}
            fontWeight={600}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
            _active={{ borderBottom: '1px solid white' }}
            borderBottom={
              currentPath === navItem.href ? '3px solid white' : 'none'
            }
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#25aae1' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        {/* <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex> */}
      </Stack>
    </Box>
  );
};

const MobileNav = ({ navItems }) => {
  return (
    <Stack bg={'#07041c'} p={4} display={{ md: 'none' }}>
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={'white'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
