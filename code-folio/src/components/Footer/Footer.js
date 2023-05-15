import {
  Box,
  Container,
  Stack,
  Text,
  Divider,
  Image,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';


const Logo = (props: any) => {
  return <Image h={5} src="./logo.png"></Image>;
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
