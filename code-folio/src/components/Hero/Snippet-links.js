import {
    Tooltip,
    Link,
    Image,
} from '@chakra-ui/react'

// Link to go to projects section
const function ProjectsSnippetLink() {
      const [isLargerThanMobile] = useMediaQuery('(min-width: 680px)');
    return (
      <>
        {isLargerThanMobile && (
              <>
                <Tooltip
                  bg="teal.600"
                  label="View my Projects"
                  aria-label="A tooltip"
                >
                  <Link w={'50%'} href="#projects">
                    <Image
                      alt={'Best Dev Snippet'}
                      id="hero-code-snippet"
                      src={'./best-dev.png'}
                    />
                  </Link>
                </Tooltip>
              </>
            )}
      </>
    );
}