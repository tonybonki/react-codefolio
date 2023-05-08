import { Box, SimpleGrid, Text, Stack, VStack, Heading, useColorModeValue, Divider} from '@chakra-ui/react';

const Skill = ({ title, text }: SkillProps) => {
  return (
    <Stack>
      <Text
        color={useColorModeValue('teal.500', 'teal.300')}
        fontSize={24}
        fontWeight={500}
      >
        {title}
      </Text>
      <Text color={useColorModeValue('gray.600', 'white')}>{text}</Text>
    </Stack>
  );
};

export default function Skillset() {
  return (
    <>
      <VStack p={4} paddingTop="40px" spacing="7" alignItems="flex-start">
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
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Skill
            title={'Technical expertise and creative problem-solving skills'}
            text={
              'As a website developer, I bring a unique combination of technical expertise and creative problem-solving skills to the table. I have a deep understanding of web development technologies such as HTML, CSS, JavaScript, and various CMS platforms'
            }
          />
          <Skill
            title={'Visually stunning and user-friendly website development'}
            text={
              'I am confident in my ability to create visually stunning and user-friendly websites that meet the needs of clients and exceed their expectations.'
            }
          />
          <Skill
            title={'Creative thinker and fast learner'}
            text={
              'Moreover, I am a fast learner and a creative thinker. I have the ability to troubleshoot and resolve issues quickly, ensuring that the site is always running smoothly.'
            }
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
