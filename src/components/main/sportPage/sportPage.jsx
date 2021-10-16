import { useEffect, useState, Fragment } from "react";
import { getNews } from "../../../service/service";
import Loader from "../../loader/loader";
import SingleArticle from "../singleArticle/singleArticle";
import "../../sass/sportPage/sportPage.css";
import SearchBar from "../searchBar/searchBar";

function Sports(props) {
  const [dataNews, setDataNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  let category = props.match.params.category;

  useEffect(() => {
    getNews(category, keyword).then((data) => {
      setDataNews(data);
    });
  }, [keyword]);

  if (dataNews.length === 0) {
    return Loader;
  }

  return (
    <div className="container_news">
      <SearchBar
        search={(q) => {
          setKeyword(q);
        }}
      />
      <div className="container_for_all_articles">
        {dataNews.data.map((item) => {
          return <SingleArticle data={item} />;
        })}
      </div>
    </div>
  );
}

export default Sports;
