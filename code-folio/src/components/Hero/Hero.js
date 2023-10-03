import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

export default function MainHero() {
  return (
    <Container mb={10} mt={{ base: '20px', lg: '100px' }} maxW={'7xl'}>
      <Stack direction={{ base: 'column', md: 'row' }}>
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
              Test
            </Text>
          </Heading>
          <Heading
            lineHeight={1.1}
            fontWeight={500}
            color={useColorModeValue('gray.600', 'white')}
            fontSize={{ base: '1l', sm: '2l', lg: 'xl' }}
          >
            <Text as={'span'} position={'relative'}>
              A portfolio entirely coded by me welcome to my
            </Text>{' '}
            <Text as={'span'} color={useColorModeValue('teal.500', 'teal.300')}>
              Code-folio!
            </Text>
          </Heading>

          <Text
            color={useColorModeValue('gray.600', 'white')}
            width={{ base: '100%', lg: '70%' }}
            fontSize={{ base: '17px', sm: '17px', lg: '19px' }}
          >
            Greetings, my name is Tony Bonki, and I am a dedicated student
            currently pursuing a degree in Computing for Business at the
            prestigious University of DCU, situated in Ireland. It is my
            pleasure to present to you this website that I have developed, which
            aims to showcase my completed projects and a diverse range of
            skills. Thank you for visiting my website, which was crafted
            entirely by me.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button size="sm" colorScheme="teal">
              Projects
            </Button>
            <Button size="sm" colorScheme="teal">
              <Link
                textDecoration={'none !important'}
                href="mailto:tony.bonki2@mail.dcu.ie?subject=Replace this with your Subject&body=Email%20Body"
              >
                Contact Me
              </Link>
            </Button>
          </Stack>
        </Stack>
        {/* The Image of Myself */}
        <Image
          w={'400px !important'}
          alt={'Hero Image'}
          align={'center'}
          borderRadius={'10px'}
          src={'./code-selfie3.png'}
        />
      </Stack>
    </Container>
  );
}

// The Blob background
export const Blob = props => {
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
