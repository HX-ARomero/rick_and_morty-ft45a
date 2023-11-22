import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";


export default function Favorites({ onClose }) {

  const myFavorites = useSelector(state => state.myFavorites);
  //* myFavorites = [ {1}, {2}, .... ]

   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
         }}
      >
         {
            !myFavorites.length
              ? <h2>No hay favoritos</h2>
              :
            myFavorites.map(myFavorite => (
               <Card
                  key={myFavorite.id}
                  id={myFavorite.id}
                  name={myFavorite.name}
                  status={myFavorite.status}
                  species={myFavorite.species}
                  gender={myFavorite.gender}
                  origin={myFavorite.origin.name}
                  image={myFavorite.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
