import { useState } from "react";
import "../../sass/searchBar/searchBar.css";

const SearchBar = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    search(text);
  };

  return (
    <div className="searchBox">
      <form action="" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search by keyword"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <input className="sub" type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
