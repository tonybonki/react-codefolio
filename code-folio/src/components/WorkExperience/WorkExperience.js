import React from 'react';
import { jobs } from '../../data/data';

import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Center,
} from '@chakra-ui/react';

import { textColor, bgColor, dividerColor, linkColor } from '../theme';

const JobSkills: React.FC<IJobSkills> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={'sm'} variant="solid" colorScheme="teal" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ExperienceList = () => {
  return (
    <Container
      color={useColorModeValue('gray.600', 'white')}
      maxW={'7xl'}
      p="12"
    >
      <Heading textAlign={'center'} as="h1" marginTop="5">
        Work{' '}
        <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
          Experience
        </Text>
      </Heading>
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
                <Link isExternal href={job.website} textDecoration="none" _hover={{ textDecoration: 'none' }}>
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
                <Text fontWeight={'bold'}>Role:</Text>
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
                <Text fontWeight={'bold'}>Duration:</Text>
                <Text>{job.timeWorked}</Text>
              </HStack>
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
