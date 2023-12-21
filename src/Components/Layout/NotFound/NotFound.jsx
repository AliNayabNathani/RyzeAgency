import { Container, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <Container
        minH={'100vh'}
        maxW="90%"
        paddingY={'8'}
        bg={'#07041C'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack alignItems={'center'}>
          <Heading
            fontWeight={'bold'}
            fontSize={['2xl', '6xl']}
            my={[4, 12]}
            color={'white'}
          >
            Page Not Found
          </Heading>
          {/* <Image src={NotFoundImg} /> */}
        </Stack>
      </Container>
    </>
  );
};

export default NotFound;
