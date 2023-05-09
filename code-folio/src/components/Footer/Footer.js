import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { AiOutlineMail } from 'react-icons/ai';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return <Image h={5} src="./logo.png"></Image>;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        color: 'teal.400',
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Link textDecoration="none !important" href={'#'}>
            Home
          </Link>
          <Link textDecoration="none !important" href={'#'}>
            About
          </Link>
          <Link textDecoration="none !important" href={'#'}>
            Blog
          </Link>
          <Link
            href={
              'mailto:tony.bonki2@mail.dcu.ie?subject=Replace this with your Subject&body=Email%20Body'
            }
            role={'group'}
            display={'block'}
            p={1}
            rounded={'base'}
            _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}
          >
            <Stack direction={'row'} align={'center'}>
              <Box>
                <Stack direction={'row'} align={'center'}>
                  <AiOutlineMail />
                  <Text
                    transition={'all .3s ease'}
                    _groupHover={{ color: 'teal.400' }}
                    fontWeight={500}
                    fontSize={13}
                  >
                    Contact Me
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
