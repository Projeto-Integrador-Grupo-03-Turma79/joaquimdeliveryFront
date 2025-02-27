import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Restaurantes from './pages/restaurantes/Restaurantes';
import DeletarRestaurante from './components/restaurantes/deletarrestaurante/DeletarRestaurante';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';



function App() {

  return (
   <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} /> 
          <Route path="/restaurantes" element={<Restaurantes/>} />
          <Route path="/deletar/:id" element={<DeletarRestaurante/>} />
          <Route path="/categoria/deletar/:id" element={<DeletarCategoria/>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App