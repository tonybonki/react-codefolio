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

import { textColor, linkColor, bgColor } from '../theme';

export const JobSkills: React.FC<IJobSkills> = props => {
  const [isLargerThanMobile] = useMediaQuery('(max-width: 680px)');
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
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
        <Box>
          <Heading marginBottom={3} fontWeight={500} fontSize={'25px'}>
            <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
              Technical expertise
            </Text>{' '}
            and creative problem-solving skills
          </Heading>
          <Text as="p">
            As a website developer, I bring a unique combination of technical
            expertise and creative problem-solving skills to the table. I have a
            deep understanding of web development technologies such as HTML,
            CSS, JavaScript, and various CMS platforms. Additionally, I am
            passionate about staying up-to-date with the latest trends and best
            practices in web development.
          </Text>
        </Box>

        <Box>
          <Heading marginBottom={3} fontWeight={500} fontSize={'25px'}>
            Visually stunning and{' '}
            <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
              user-friendly
            </Text>{' '}
            website development
          </Heading>
          <Text as="p">
            I am confident in my ability to create visually stunning and
            user-friendly websites that meet the needs of clients and exceed
            their expectations. I am skilled at working collaboratively with
            designers, project managers, and clients to bring their vision to
            life while ensuring the functionality and usability of the site.
          </Text>
        </Box>
        <Box>
          <Heading marginBottom={3} fontWeight={500} fontSize={'25px'}>
            Creative thinker and{' '}
            <Text fontWeight={500} color={useColorModeValue('teal.500', 'white')} as={'span'}>
              fast learner
            </Text>{' '}
            committed to high-quality work
          </Heading>
          <Text as="p">
            Moreover, I am a fast learner and a creative thinker. I have the
            ability to troubleshoot and resolve issues quickly, ensuring that
            the site is always running smoothly. I am also committed to
            delivering high-quality work on time and within budget.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ExperienceList;
