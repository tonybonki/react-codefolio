import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

document.addEventListener('keydown', event => {
  // Check if the key combination is CTRL + SHIFT + C
  if (event.ctrlKey && event.shiftKey && event.code === 'KeyC') {
    console.log('Hello')
    document.body.classList.toggle('dark-mode');
  }
});



export default function ColorModeToggle(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}
      >
        {colorMode === 'light' ? <BsMoon /> : <BsSun />}
      </Button>
  );
}
