import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';
import { transform } from 'framer-motion';

const IMAGE = './certificates/sololearn-react.jpg';

export default function CertificateCards() {
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  return (
    <>
      <Box>
        {/* Hide Icon in Mobile width */}
        {isSmallerThanMobile && (
          <>
            <Image mx={'auto'} boxSize={20} src="./work-exp.png" />
          </>
        )}
        <Heading
          my={5}
          textAlign={'center'}
          color={useColorModeValue('gray.600', 'white')}
        >
          {' '}
          <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
            My
          </Text>{' '}
          Certificates
        </Heading>
      </Box>
      <Center py={5}>
        <Image
                  w={{ lg: '450px', sm: '350px', base:'350px' }}
                  m={4}
          rounded={'md'}
          shadow={'lg'}
          objectFit={'cover'}
          src={'./certificates/sololearn-react.jpg'}
        />
      </Center>
    </>
  );
}
