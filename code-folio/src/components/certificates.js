import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  useMediaQuery,
  Image,
  Grid,
  Divider,
} from '@chakra-ui/react';

import { certificates } from '../data/data';

export default function CertificateCards() {
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  return (
    <>
      <Box>
        {/* Hide Icon in Mobile width */}
        {isSmallerThanMobile && (
          <>
            <Image mx={'auto'} boxSize={20} src="./certificate.png" />
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
      <Divider mx={'auto'} my="5" />

      <Grid
        w={{ sm: 1400 }}
        mx={'auto'}
        templateColumns={['fr', '1fr', '1fr 1fr 1fr']}
        gap={10}
      >
        {certificates.map(certificate => (
          <Box>
            <Image
              rounded={'md'}
              shadow={'base'}
              w={{ base: 350, sm: 500 }}
              mb={6}
              mx={'auto'}
              src={`./certificates/${certificate.name}`}
            />
          </Box>
        ))}
      </Grid>
    </>
  );
}
