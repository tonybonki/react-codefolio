import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Divider,
  Image,
  HStack,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

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
        <Divider />
        <HStack spacing={2}>
          <Image h={5} src={'./favicon.ico'}></Image>
          <Text pt={1}> 2023 Codefolio by Bonki</Text>
        </HStack>
      </Container>
    </Box>
  );
}
