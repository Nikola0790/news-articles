import { Link } from "react-router-dom";
import "../../sass/firstPage/firstPage.css";

// Page for choose category of news
function FirstPage() {
  return (
    <main>
      <div className="container">
        <Link to={`/technology/technology`}>
          <div className="box box_tec">
            <p>TECHNOLOGY</p>
            <p>NEWS</p>
          </div>
        </Link>
        <Link to={`/sports/sports`}>
          <div className="box box_sport">
            <p>SPORTS</p>
            <p>NEWS</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default FirstPage;
