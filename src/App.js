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
import { createContext, useState } from 'react';


export const CharactersContext = createContext();

const App = () =>{
    //Declaramos una variable de estado para que esta pueda cambiar desde los hijos
    //Le pasamos un único objeto con la variable de estado y la función para modificarlo
    const [charactersList, setCharactersList] = useState([]);

    console.log(charactersList);
    return (
        <>
        
        <CharactersContext.Provider value={{charactersList, setCharactersList}}>
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
        </CharactersContext.Provider>
        </>

    )
}

export default App;
