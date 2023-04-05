// Import Chakra UI components
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Link,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';

// Import Chakra UI Icons
import { ExternalLinkIcon } from '@chakra-ui/icons';

// Import Project Data
import { projects } from '../../data/data';


const Skill = ({ text, image, }: SkillProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}      >
        {image}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const [isLargerThanMobile] = useMediaQuery('(max-width: 680px)');
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');

  return (
    <Container maxW={'6xl'}>
      {}
      <Heading color={useColorModeValue('gray.600', 'white')} my={9}>
        {' '}
        <Text color={useColorModeValue('teal.500', 'teal.300')} as={'span'}>
          Apps
        </Text>{' '}
        and Projects
      </Heading>
      {/* Map Projects */}
      {projects.map(project => (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading color={'gray.600'} fontSize={30}>
              {project.titleFname}{' '}
              <Text as={'span'} color={project.colorTheme}>
                {project.titleSname}
              </Text>
            </Heading>
            <Text
              color={'gray.600'}
              fontSize={{ base: '13px', sm: '13px', lg: '15px' }}
            >
              {project.description}
            </Text>
            <Heading color={'gray.600'} fontSize={20}>
              Built with
            </Heading>
            <Stack
              spacing={0.2}
              divider={<StackDivider borderColor={'gray.200'} />}
            >
              {project.stack.map(tech => (
                <Skill
                  image={<Image src={`/icons/${tech}.png`} w={4} h={4} />}
                  text={
                    <Text
                      fontWeight={500}
                      fontSize={{ base: '11px', sm: '12px', lg: '13px' }}
                      color={'gray.600'}
                    >
                      {tech}
                    </Text>
                  }
                />
              ))}
              }
              <Link
                color={'teal.400'}
                fontWeight={600}
                fontSize={'14px'}
                bg={'teal.50'}
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
            </Stack>
            {isLargerThanMobile && (
              <>
                <Image
                  alt={`${project.imageName}`}
                  width={'250px'}
                  marginX={'auto !important'}
                  src={`/images/Busy Blogs/busy-blogs-mobile.png`}
                />
              </>
            )}
          </Stack>
          <Flex>
            {isSmallerThanMobile && (
              <>
                <Image
                  alt={`${project.imageName}`}
                  objectFit={'contain'}
                  src={`/images/Busy Blogs/busy-blogs-macbook.png`}
                />
              </>
            )}
          </Flex>
        </SimpleGrid>
      ))}
    </Container>
  );
}
