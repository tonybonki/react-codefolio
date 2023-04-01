import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import { FiGithub } from 'react-icons/fi';

export default function MainHero() {
  return (
    <Container my={10} maxW={'7xl'}>
      <Stack align={'center'} direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'white')}
            fontSize={{ base: '2xl', sm: '3xl', lg: '6xl' }}
          >
            <Text as={'span'} position={'relative'}>
              Welcome to my
            </Text>
            <br />
            <Text as={'span'} color={useColorModeValue('teal.500', 'teal.300')}>
              Codefolio!
            </Text>
          </Heading>
          <Text
            color={useColorModeValue('gray.600', 'white')}
            fontSize={{ base: '17px', sm: '17px', lg: '19px' }}
          >
            Hi, my name is Tony Bonki. I am a student of the University of DCU
            in Ireland studying Computing for Business. I created this website
            to showcase the projects I have done and show off all of my skills.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            {/* Add hero components here*/}
            <Link
              _hover={{
                textDecoration: 'none',
              }}
              isExternal
              href="https://github.com/tonybonki"
            >
              {' '}
              <Button size={'md'} leftIcon={<FiGithub />} colorScheme="teal">
                Github
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'90%'}
            h={'90%'}
            position={'absolute'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('teal.50', 'teal.400')}
          />
          {/* The Image of Myself */}
          <Box position={'relative'} m={3} width={'full'} overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              marginLeft={'auto'}
              marginRight={'auto'}
              align={'center'}
              w={'60%'}
              borderRadius={'10px'}
              src={'./code-selfie3.png'}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

// The Blob image behind the photo of myself
export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
