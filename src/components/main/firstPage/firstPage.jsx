import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../../service/service";
import Header from "../../header/header";
import "../../sass/firstPage/firstPage.css";

function FirstPage() {
  /* const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    getNews(category).then((data) => {
      setDataNews(data);
    });
  }, []); */

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
