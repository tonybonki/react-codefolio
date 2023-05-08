// Import CV File

import React from 'react';
import { jobs } from '../../data/data';

import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Button,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useMediaQuery,
  useColorModeValue,
  Container,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

import { linkColor } from '../theme';

export const JobSkills: React.FC<IJobSkills> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag
            fontSize={{ base: '12px', sm: 'none', lg: '13px' }}
            variant="solid"
            p={1.5}
            colorScheme="teal"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ExperienceList = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  return (
    <Container
      id="work-experience"
      color={useColorModeValue('gray.600', 'white')}
      maxW={{ lg: '7xl' }}
    >
      <Box position={'relative'} overflow={'hidden'}>
        {/* Hide this App Icon in Mobile width */}
        {isSmallerThanMobile && (
          <>
            <Image mx={'auto'} boxSize={20} src="./work-exp.png" />
          </>
        )}
        <Heading
          my={5}
          textAlign={{ base: 'left', sm: 'none', lg: 'center' }}
          color={useColorModeValue('gray.600', 'white')}
        >
          {' '}
          <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
            Work
          </Text>{' '}
          Experience
        </Heading>
        {/* Head */}
        <Box textAlign={{ base: 'left', sm: 'none', lg: 'center' }}>
          <Link
            _hover={{
              textDecoration: 'none',
            }}
            isExternal
            href="https://github.com/tonybonki"
          >
            {' '}
          </Link>
          {/* Add Button or Component Here */}
        </Box>
      </Box>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {/* Map the Job Objects as Wrap Items */}
        {jobs.map(job => (
          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%">
              <Heading textAlign={'center'} fontSize="25px" marginBottom="4">
                {job.company}
              </Heading>
              <Box borderRadius="lg" overflow="hidden">
                <Link
                  isExternal
                  href={job.website}
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Image
                    transform="scale(1.0)"
                    src={`./jobImages/${job.jobImageName}`}
                    alt={job.company}
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Link>
              </Box>
              <JobSkills tags={job.skills} marginTop="3" />

              <HStack
                marginTop="2"
                spacing="2"
                display="flex"
                alignItems="center"
              >
                <Text color={linkColor[colorMode]} fontWeight={'bold'}>
                  Role:
                </Text>
                <Text>{job.title}</Text>
              </HStack>
              <Text as="p" fontSize="md" marginTop="2">
                {job.description}
              </Text>
              <HStack
                marginTop="2"
                spacing="2"
                display="flex"
                alignItems="center"
              >
                <Text color={linkColor[colorMode]} fontWeight={'bold'}>
                  Duration:
                </Text>
                <Text>{job.timeWorked}</Text>
              </HStack>
              <Link isExternal href={job.website}>
                <Button marginTop={'10px'} size="sm" colorScheme="teal">
                  Company Website
                </Button>
              </Link>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      <VStack paddingTop="40px" spacing="7" alignItems="flex-start">
        <Heading
          marginTop={5}
          textAlign={{ base: 'left', sm: 'none', lg: 'center' }}
          color={useColorModeValue('gray.600', 'white')}
        >
          {' '}
          <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
            Why
          </Text>{' '}
          Hire Me?
        </Heading>
        <Divider />
      </VStack>
    </Container>
  );
};

export default ExperienceList;
