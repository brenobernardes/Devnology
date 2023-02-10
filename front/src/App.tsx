import React from 'react';
import { GlobalStyled } from './styles/global';
import { Header } from './Components/Header/index';
import { TableList } from './Components/TableList';

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <TableList />
    </>
  );
}

export default App;
