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

import { ExternalLinkIcon } from '@chakra-ui/icons';

import { textColor, linkColor, bgColor } from '../theme';

export const JobSkills: React.FC<IJobSkills> = props => {
  const [isLargerThanMobile] = useMediaQuery('(max-width: 680px)');
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag
            fontSize={{ base: '10px', sm: 'none', lg: '13' }}
            variant="solid"
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
      color={useColorModeValue('gray.600', 'white')}
      maxW={'7xl'}
      p="12"
    >
      <Box position={'relative'} overflow={'hidden'}>
        {/* Hide this App Icon in Mobile width */}
        {isSmallerThanMobile && (
          <>
            <Image mx={'auto'} boxSize={20} src="./app-store.png" />
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
        <Text
          mx={'auto'}
          width={{ base: 'left', sm: 'none', lg: '50%' }}
          color={useColorModeValue('gray.600', 'white')}
          mb={5}
          textAlign={{ base: 'left', sm: 'none', lg: 'center' }}
        >
          Here are a list of some of the apps I've built using different coding
          languages. Click the{' '}
          button to view the website/app live. To view the repository of my
          projects click the{' '}
          <Link
            color={linkColor[colorMode]}
            colorScheme={'teal'}
            fontWeight={600}
            fontSize={'14px'}
            bg={bgColor[colorMode]}
            p={1}
            marginTop={3}
            alignSelf={'flex-start'}
            rounded={'md'}
            href={'https://github.com/tonybonki'}
          >
            My Github Repo <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          below to view the projects on my github repository.
        </Text>
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

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Why Hire Me?</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
  );
};

export default ExperienceList;
