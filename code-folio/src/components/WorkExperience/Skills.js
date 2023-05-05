import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { BsCloud, BsStar } from 'react-icons/bs';

const Skill = ({ title, text, icon }: SkillProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        mb={0.5}
      >
        {icon}
      </Flex>
      <Text color={'gray.600'} fontSize={24} fontWeight={500}>
        {title}
      </Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Skillset() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Skill
          icon={<Icon colorScheme={'teal'} color={'teal'} as={BsCloud} w={10} h={10} />}
          title={'Technical expertise and creative problem-solving skills'}
          text={
            'As a website developer, I bring a unique combination of technical expertise and creative problem-solving skills to the table. I have a deep understanding of web development technologies such as HTML, CSS, JavaScript, and various CMS platforms'
          }
        />
        <Skill
          icon={<Icon color={'teal'} as={BsStar} w={10} h={10} />}
          title={'Visually stunning and user-friendly website development'}
          text={
            'I am confident in my ability to create visually stunning and user-friendly websites that meet the needs of clients and exceed their expectations.'
          }
        />
        <Skill
          icon={<Icon as={'add icon here'} w={10} h={10} />}
          title={'Creative thinker and fast learner'}
          text={
            'Moreover, I am a fast learner and a creative thinker. I have the ability to troubleshoot and resolve issues quickly, ensuring that the site is always running smoothly.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
