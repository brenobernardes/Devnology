import React from 'react';
import { GlobalStyled } from './styles/global';
import { Header } from './Components/Header/index';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
