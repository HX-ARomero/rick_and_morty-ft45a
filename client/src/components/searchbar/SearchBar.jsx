import React from "react";
import styled from "styled-components";

//* Etiquetas personalizadas con Styled Components
const Container = styled.div`
   padding-top: 20px;
   padding-bottom: 15px;
   margin: auto;
`

const Input = styled.input`
   border-radius: 5px;
   height: 40px;
`

const MyButton = styled.button`
   background-color: darkslategrey;
   color: wheat;
   &:hover {
      color: darkslategrey;
      background-color: darkolivegreen;
   }
`

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
      <Container>
         <Input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <MyButton onClick={handleClick}>Agregar</MyButton>
         {/* Traer Character Random */}
         <MyButton onClick={handleRandom}>Random</MyButton>
         <hr />
      </Container>
   );
}
