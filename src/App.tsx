import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre nós/Sobre';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import Doacoes from './paginas/doacoes/Doacoes';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';


function App() {
  return (
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/contato' element={<Contato />}/>
              <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
              <Route path='/doacoes' element={<Doacoes />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
          </Routes>
          </div>
        <Footer /> 
      </Router>
  );
}

export default App;