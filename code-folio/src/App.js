import React from 'react';
// Import Components
import MainHero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SplitWithImage from './components/Projects/Projects';
import ExperienceList from './components/WorkExperience/WorkExperience';
import Skillset from './components/WorkExperience/Skills'; 
import Footer from './components/Footer/Footer'
import CertificateCards from './components/certificates';

import {
  ChakraProvider,
} from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <MainHero />
      <SplitWithImage />
      <ExperienceList />
      <Skillset />
      {/* <CertificateCards /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
