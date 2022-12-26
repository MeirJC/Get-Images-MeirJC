import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  // const handleClick = () => {
  //   onSubmit("cars");
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="search-bar">Images Search:</label>
        <input type="text" onChange={handleChange} value={term} />
      </form>

      {/* <button onClick={handleClick}>Search!</button> */}
    </div>
  );
}

export default SearchBar;
