import "../sass/header/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={`/mainPage`}>
        <p>Technology and Sport News</p>
      </Link>
    </header>
  );
};

export default Header;
