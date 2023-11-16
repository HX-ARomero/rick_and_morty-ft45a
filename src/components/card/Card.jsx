import { Link } from "react-router-dom";

export default function Card(props) {
   // console.log(props);
   //* props = { id:.., name:.., onclose: () => {} }
   return (
      <div
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "15px",
         }}
      >
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`} >
            <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}
