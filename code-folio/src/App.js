import React from 'react';
// Import Components
import MainHero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'

import {
  ChakraProvider,
} from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <MainHero />
    </ChakraProvider>
  );
}

export default App;
