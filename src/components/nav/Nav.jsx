import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function Nav(props) {

  return (
     <div>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <hr />
        <SearchBar onSearch={props.onSearch} />
     </div>
  );
}