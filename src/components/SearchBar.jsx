export default function SearchBar(props) {
   //* props = { onSearch: (characterID) => window.alert(characterID)}
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("Id: 1")}>Agregar</button>
      </div>
   );
}
