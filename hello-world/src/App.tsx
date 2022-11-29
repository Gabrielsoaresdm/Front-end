import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estatitcs/navbar/navbar';
import Footer from './components/estatitcs/footer/footer'; 
import Login from './paginas/login/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Home' element={<Home />} />

      </Routes>
      <Footer />
    </Router>
    </>
    
  );
}

export default App;
