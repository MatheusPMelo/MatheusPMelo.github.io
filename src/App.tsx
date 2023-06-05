import React from 'react';

//styles
import Global from './styles/Global';
import dark from './styles/dark';
import { ThemeProvider } from 'styled-components';

//Components
import Header from './components/header';
import Sidebar from './components/sidebar';
import Hero from './components/hero';
import Repositories from './components/repositories';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        
        <Global />

        <Sidebar />
        <Hero />
        <Repositories />
        <Contact />

      </ThemeProvider>
    </div>
  );
}

export default App;
