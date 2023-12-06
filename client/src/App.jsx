import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Form from './components/form/Form.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/notfound/NotFound.jsx';

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();

   const [characters, setCharacters] = useState([]);

   async function onSearch(id) {
      try {
         //* Verificar si existe character:
         const characterId = characters.filter(
            char => char.id === Number(id)
         )
         if(characterId.length) {
            return alert(`${characterId[0].name} ya existe!`)
         }

         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters([...characters, data]);
            navigate("/home");
         } else {
            alert('¡El id debe ser un número entre 1 y 826!');
         }
      } catch (error) {
         alert("¡El id debe ser un número entre 1 y 826!");
      }
   }

   const onClose = (id) => {
      console.log(id);
      console.log(typeof id);
      setCharacters(characters.filter(char => char.id !== Number(id)));
      dispatch(removeFav(id));
   }

   //* Login
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         //* data = { access: true || false }
         if(data.access) {
            setAccess(data.access);
            navigate('/home');
         } else {
            alert("Credenciales incorrectas!");
         }
      } catch (error) {
         alert(error.message);
      }
   }

   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      //* Logueo automático
      // !access && navigate('/home');
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null
         }
         <Routes>
            <Route
               path="/"
               element={<Form login={login} />}
            />
            <Route 
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} />} />
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
      </div>
   );
}

export default App;

