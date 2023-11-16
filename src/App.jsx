import { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notfound/NotFound.jsx';

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();

   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length) {
         //* [ {name:Rick, id:1, .... } ]
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  // console.log(data)
                  setCharacters([...characters, data]);
               } else {
                  window.alert('¡El id debe ser un número entre 1 y 826!');
               }
            });
      navigate("/home");
   }

   //* characters [ {id:1, name:"Rick"}, {id:2, name:"Morty"} ]
   //* id: "2" => character.id === id
   //* [ {id: 1, name:"Rick"} ]

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
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
               path="*"
               element={<NotFound />}
            />
         </Routes>
         <hr />
      </div>
   );
}

export default App;

