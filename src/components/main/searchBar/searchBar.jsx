import { useState } from "react";
import "../../sass/searchBar/searchBar.css";

const SearchBar = ({ search }) => {
  const [text, setText] = useState("");
  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search by keyword"
        onChange={(event) => onSearch(event.target.value)}
        value={text}
      />
    </div>
  );
};

export default SearchBar;
