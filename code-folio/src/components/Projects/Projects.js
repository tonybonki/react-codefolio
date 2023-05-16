// Import Chakra UI components
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorMode,
  Link,
  useMediaQuery,
  useColorModeValue,
  Spacer,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  VStack,
  TabPanel,
} from '@chakra-ui/react';

// Import Color themes

import { textColor, bgColor, dividerColor, linkColor } from '../theme';

import { FiGithub } from 'react-icons/fi';

// Import Blob background
import { Blob } from '../Hero/Hero';

// Import Chakra UI Icons
import { ExternalLinkIcon } from '@chakra-ui/icons';

// Import Project Data
import { projects } from '../../data/data';

// Import use State from React 
import { useState } from 'react';

const Skill = ({ text, image }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'}>
        {image}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const { colorMode } = useColorMode();
  const [isLargerThanMobile] = useMediaQuery('(max-width: 680px)');
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container
      id="projects"
      marginTop={{ base: '20%', lg: '5%' }}
      mb={'5%'}
      maxW={'6xl'}
    >
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
        <Blob
          w={'100%'}
          opacity={'50%'}
          h={'100%'}
          position={'absolute'}
          left={0}
          zIndex={-1}
          display={{ base: 'none', sm: 'block', lg: 'block' }}
          color={useColorModeValue('teal.50', 'teal.400')}
        />
        {/* The Image of Myself */}
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
              Apps
            </Text>{' '}
            and Projects
          </Heading>
          {/* Head */}
          <Text
            mx={'auto'}
            width={{ base: 'left', sm: 'none', lg: '50%' }}
            color={useColorModeValue('gray.600', 'white')}
            mb={5}
            textAlign={{ base: 'left', sm: 'none', lg: 'center' }}
          >
            Here are a list of some of the apps I've built using different
            coding languages. Click the{' '}
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
              href={'#projects'}
            >
              Live Preview <ExternalLinkIcon mx="2px" />
            </Link>{' '}
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
              <Button
                mb={{ base: '25%', lg: '5%' }}
                textAlign={'center'}
                size={{ base: 'sm', lg: 'md' }}
                title="Go to my Github Repo"
                leftIcon={<FiGithub />}
                colorScheme="teal"
                color={useColorModeValue('white', 'white')}
              >
                My Github Repo
              </Button>
            </Link>
            {/* Add Button or Component Here */}
          </Box>
        </Box>
      </Flex>
      {/* Tab componet that filters projects bsaed on the programming language */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab onClick={() => setActiveTab(0)}>
            <VStack>
              <Image h={5} src="/icons/React.png"></Image>
              {/* TBD have below feature or not */}
              {/* <Text color={useColorModeValue('gray.600', 'white')}  fontWeight={500}>{' '}</Text>  */}
            </VStack>
          </Tab>
          <Tab onClick={() => setActiveTab(0)}>
            <VStack>
              <Image h={5} src="/icons/React.png"></Image>
              {/* TBD have below feature or not */}
              {/* <Text color={useColorModeValue('gray.600', 'white')}  fontWeight={500}>{' '}</Text>  */}
            </VStack>
          </Tab>
          <Tab onClick={() => setActiveTab(1)}>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{/* <p>one!</p> */}</TabPanel>
          <TabPanel>{/* <p>two!</p> */}</TabPanel>
        </TabPanels>
      </Tabs>
      {/* Map Projects */}
      {projects
        .filter((project, index) => activeTab === index)
        .map(project => (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Heading color={textColor[colorMode]} fontSize={30}>
                {project.titleFname}{' '}
                <Text as={'span'} color={project.colorTheme}>
                  {project.titleSname}
                </Text>
              </Heading>
              <Text
                color={textColor[colorMode]}
                fontSize={{ base: '13px', sm: '13px', lg: '15px' }}
              >
                {project.description}
              </Text>
              <Heading color={textColor[colorMode]} fontSize={20}>
                Software Stack
              </Heading>
              <Stack
                spacing={0.2}
                divider={<StackDivider borderColor={dividerColor[colorMode]} />}
              >
                {project.stack.map(tech => (
                  <Skill
                    image={<Image src={`/icons/${tech}.png`} w={4} h={4} />}
                    text={
                      <Text
                        fontWeight={500}
                        fontSize={{ base: '11px', sm: '12px', lg: '13px' }}
                        color={textColor[colorMode]}
                      >
                        {tech}
                      </Text>
                    }
                  />
                ))}
                <Box mt={4}>
                  <Link
                    color={linkColor[colorMode]}
                    colorScheme={'teal'}
                    fontWeight={600}
                    fontSize={'14px'}
                    marginRight={'10px'}
                    bg={bgColor[colorMode]}
                    p={1}
                    marginTop={3}
                    alignSelf={'flex-start'}
                    rounded={'md'}
                    // Replace this link with mapped link attribute
                    href={project.previewLink}
                    isExternal
                  >
                    Live Preview <ExternalLinkIcon mx="2px" />
                  </Link>
                  <Link
                    color={linkColor[colorMode]}
                    colorScheme={'teal'}
                    fontWeight={600}
                    fontSize={'14px'}
                    bg={bgColor[colorMode]}
                    p={1}
                    isExternal
                    marginTop={3}
                    alignSelf={'flex-start'}
                    rounded={'md'}
                    href={project.githubLink}
                  >
                    Github Repository <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </Stack>
              {isLargerThanMobile && (
                <>
                  <Image
                    alt={`${project.imageName}`}
                    width={'250px'}
                    marginX={'auto !important'}
                    src={`./${project.mobileImageName}`}
                  />
                </>
              )}
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Blob
                w={'100%'}
                h={'100%'}
                position={'absolute'}
                left={0}
                opacity={'40%'}
                zIndex={-1}
                display={{ base: 'none', sm: 'block', lg: 'block' }}
                color={project.colorTheme}
              />
              {/* The Image of Myself */}
              <Box position={'relative'} m={3} overflow={'hidden'}>
                {isSmallerThanMobile && (
                  <>
                    <Image
                      alt={`${project.imageName}`}
                      objectFit={'contain'}
                      src={`./${project.macbookImageName}`}
                    />
                  </>
                )}
              </Box>
            </Flex>
            <Spacer />
          </SimpleGrid>
        ))}
    </Container>
  );
}
