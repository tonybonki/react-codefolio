import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ColorModeToggle(props: ButtonProps) {
const { colorMode, toggleColorMode } = useColorMode();

// If Shift and N is pressed change the color mode to dark mode
const handleKeyDown = event => {
  if (event.shiftKey && event.code === 'KeyN') {
    toggleColorMode();
  }
};

document.removeEventListener('keydown', handleKeyDown);
document.addEventListener('keydown', handleKeyDown);



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
