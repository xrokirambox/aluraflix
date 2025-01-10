import './App.css';
import Header from './components/Header';
import { CategoryProvider } from './context/categories';
import { VideoProvider } from './context/videos';
import Footer from './components/Footer';
import { FavoritoProvider } from './context/favorites';
import { ModalProvider } from './context/modal';
import ContainerModal from './components/ContainerModal';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <FavoritoProvider>
        <VideoProvider>
          <CategoryProvider>
            <ModalProvider>
              <ContainerModal />
              <Header />
                <Outlet /> 
              <Footer />
            </ModalProvider>
          </CategoryProvider>
        </VideoProvider>
      </FavoritoProvider>
    </>
  );
}

export default App;
