import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import ListaRestaurantes from './components/restaurantes/listarestaurantes/ListaRestaurantes';
import DeletarRestaurante from './components/restaurantes/deletarrestaurante/DeletarRestaurante';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

import FormCategorias from './components/categorias/FormCategorias';
import FormRestaurantes from './components/restaurantes/FormRestaurantes';
import ListaSaudaveis from './components/restaurantes/restaurantessaudaveis/ListaSaudaveis';





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
          <Route path="/deletarrestaurantes/:id" element={<DeletarRestaurante/>} />
          <Route path="/deletarcategorias/:id" element={<DeletarCategoria/>} />

          <Route path="/cadastrarcategorias" element={<FormCategorias />} />
          <Route path="/editarcategorias/:id" element={<FormCategorias />} />
          <Route path="/cadastrarrestaurantes" element={<FormRestaurantes />} />
          <Route path="/editarrestaurantes/:id" element={<FormRestaurantes />} />
          <Route path="/listasaudaveis/" element={<ListaSaudaveis />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App