import Card from './Card';

export default function Cards({ characters }) {
   // console.log(characters);
   //* props = { characters: [ --- ] }
   //* characters = [ {R}, {M}, {B}, {S} ]
   return (
      <div>
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
