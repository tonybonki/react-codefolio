import React from 'react';
// Import Components
import Navbar from './components/Navbar'
import {
  ChakraProvider,
} from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
