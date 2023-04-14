import {
  Button,
  ButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

// Import React Functions and Components
import React, { useState } from 'react';

export default function ColorModeToggle(props: ButtonProps) {
const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState('Night Mode');

  const handleClick = () => {
    setMode(mode === 'Night Mode' ? 'Light Mode' : 'Night Mode');
    toggleColorMode();
  };

// If Shift and N is pressed toggle the color mode 
const handleKeyDown = event => {
  if (event.shiftKey && event.code === 'KeyN') {
    setMode(mode === 'Night Mode' ? 'Light Mode' : 'Night Mode');
    toggleColorMode();
    document.removeEventListener('keydown', handleKeyDown);
  }
};
  
document.addEventListener('keydown', handleKeyDown);

  return (
    <Tooltip
      fontSize="sm"
      openDelay={400}
      bg="teal.500"
      hasArrow
      color={useColorModeValue('white', 'white')}
      closeOnClick={false}
      label={mode}
    >
      <Button
        aria-label="Toggle Color Mode"
        onClick={handleClick}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}
      >
        {colorMode === 'light' ? <BsMoon /> : <BsSun />}
      </Button>
    </Tooltip>
  );
}
