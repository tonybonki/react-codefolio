import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ColorModeToggle(props: ButtonProps) {
const { colorMode, toggleColorMode } = useColorMode();

// If Shift and N is pressed toggle the color mode 
const handleKeyDown = event => {
  if (event.shiftKey && event.code === 'KeyN') {
    toggleColorMode();
    // This line of code prevents the website from 
    // slowing down if the funtion is executed many times
    document.removeEventListener('keydown', handleKeyDown);
  }
};
  
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
