import React from "react";

export default function SearchBar(props) {

   const [id, setId] = React.useState(""); //* [ Estado, manejador]
   const handleChange = event => {
      const {value} = event.target;
      // console.log(value);
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   //* Traer Character Random
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};
   
   return (
      <div>
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick}>Agregar</button>
         {/* Traer Character Random */}
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
