import './App.css';
import Home from './paginas/home/Home';
import Footer from './components/estatics/footer/footer'; 
import Login from './paginas/login/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estatics/navbar/navbar';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import TabPostagem from './components/postagens/tabpostagem/TabPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario/>}/>
        <Route path='/temas' element={<ListaTema/>}/>
        <Route path='/postagem' element={<ListaPostagem/>}/>
      </Routes>
      <Footer />
    </Router>
  
    
  );
}

export default App;
