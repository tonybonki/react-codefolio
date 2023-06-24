import {
  Box,
  SimpleGrid,
  HStack,
  Text,
  Stack,
  Image,
  Heading,
  useColorModeValue,
  Icon,
  useMediaQuery,
  Divider,
  Container,
} from '@chakra-ui/react';
import { GoFileCode, GoPencil, GoMortarBoard } from 'react-icons/go';
const Skill = ({ title, text, icon }) => {
  
  return (
    <Stack>
      <HStack spacing={0}>
        <Icon color={useColorModeValue('teal.500', 'teal.300')} boxSize={10}>
          {icon}
        </Icon>
        <Text
          color={useColorModeValue('gray.600', 'white')}
          fontSize={24}
          fontWeight={500}
        >
          {title}
        </Text>
      </HStack>

      <Text color={useColorModeValue('gray.600', 'white')}>{text}</Text>
    </Stack>
  );
};

export default function Skillset() {
  const [isSmallerThanMobile] = useMediaQuery('(min-width: 680px)');
  return (
    <Container my={5} maxW={'6xl'}>
      <Box>
        {/* Hide Icon in Mobile width */}
        {isSmallerThanMobile && (
          <>
            <Image mx={'auto'} h={95} src="./my-skills.png" />
          </>
        )}
        <Heading
          my={2}
          textAlign={'center'}
          color={useColorModeValue('gray.600', 'white')}
        >
          {' '}
          <Text color={useColorModeValue('teal.500', 'white')} as={'span'}>
            Why you want me
          </Text>{' '}
          On your team
        </Heading>
      </Box>
      <Divider />
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Skill
            title={'Technical expertise and creative problem-solving skills'}
            text={
              'As a website developer, I bring a unique combination of technical expertise and creative problem-solving skills to the table. I have a deep understanding of web development technologies such as HTML, CSS, JavaScript, and various CMS platforms'
            }
            icon={<GoFileCode />}
          />
          <Skill
            title={'Visually stunning and user-friendly website development'}
            icon={<GoPencil />}
            text={
              'I am confident in my ability to create visually stunning and user-friendly websites that meet the needs of clients and exceed their expectations.'
            }
          />
          <Skill
            title={'Creative thinker and fast learner'}
            icon={<GoMortarBoard />}
            text={
              'Moreover, I am a fast learner and a creative thinker. I have the ability to troubleshoot and resolve issues quickly, ensuring that the site is always running smoothly.'
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
