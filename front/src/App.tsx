import { useState } from 'react';
import { GlobalStyled } from './styles/global';
import { Header } from './Components/Header/index';
import { NewRegisterModal } from './Components/Modal';
import { TableList } from './Components/TableList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyled />
      <Header onOpenModal={handleOpenModal} />
      <TableList/>
      <NewRegisterModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
