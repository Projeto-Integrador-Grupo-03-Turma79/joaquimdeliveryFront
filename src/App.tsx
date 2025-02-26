import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Restaurantes from './pages/restaurantes/Restaurantes';
import FormCategorias from './components/categorias/FormCategorias';



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
          <Route path="/cadastrarcategorias" element={<FormCategorias />} />
          <Route path="/editarcategorias/:id" element={<FormCategorias />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App