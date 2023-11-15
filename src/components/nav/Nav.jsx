import SearchBar from "../searchbar/SearchBar";

export default function Nav(props) {

  return (
     <div>
        <SearchBar onSearch={props.onSearch} />
     </div>
  );
}