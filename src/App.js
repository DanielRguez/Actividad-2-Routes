import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import { Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layaout';
import NotFound from './pages/NotFound';
import BlogCharacter from './pages/BlogCharacter';

const App = () =>{
  
    return (
        <>

        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route element={<Inicio />} path="/"></Route>
                <Route element={<Contacto />} path="/contacto"></Route> 
                <Route element={<Blog />} path="/blog"></Route> 
                <Route element={<BlogCharacter/>} path="/blog/:id"></Route>
                <Route element={<NotFound/>} path="*"></Route>
            </Route>
            
        </Routes>
        </>

    )
}

export default App;
