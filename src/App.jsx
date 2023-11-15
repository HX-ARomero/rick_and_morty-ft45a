import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";
//* https://rym2.up.railway.app/api/character/10?key=pi-hx-aromero
//* https://rym2.up.railway.app/api/character/10?key=henrystaff
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length) {
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
         <hr />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;

