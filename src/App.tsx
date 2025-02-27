import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import ListaRestaurantes from './components/restaurantes/listarestaurantes/ListaRestaurantes';



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
          <Route path="/listacategorias" element={<ListaCategorias/>} />
          <Route path="/listarestaurantes" element={<ListaRestaurantes/>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App