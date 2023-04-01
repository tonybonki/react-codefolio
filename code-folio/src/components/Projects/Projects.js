import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

// This constant may be obsolete in the future
const Skill = ({ text, icon, iconBg }: SkillProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'4xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Link
            color={'teal.400'}
            fontWeight={600}
            fontSize={'15px'}
            bg={useColorModeValue('teal.50', 'teal.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
            // Replace this link with mapped link attribute
            href="https://chakra-ui.com" 
            isExternal
          >
            Live Preview <ExternalLinkIcon mx="2px" />
          </Link>

          <Heading color={useColorModeValue('gray.600', 'white')} fontSize={30}>
            Add Project Title here
          </Heading>
          <Text
            color={useColorModeValue('gray.600', 'white')}
            fontSize={{ base: '17px', sm: '17px', lg: '19px' }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            aliquam aut debitis laborum recusandae blanditiis nisi reiciendis
            illum ut eveniet dolore ipsa sapiente ea maiores alias minima dicta,
            libero rem.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Skill
              icon={<Icon as={'test'} color={'green.500'} w={5} h={5} />}
              text={
                <Text
                  fontWeight={500}
                  color={useColorModeValue('gray.600', 'white')}
                >
                  Add Skill Name Here
                </Text>
              }
            />
          </Stack>
        </Stack>
        <Flex p={5}>
          <Image
            rounded={'md'}
            alt={'Project Image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
