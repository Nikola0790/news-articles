import { useEffect, useState, Fragment } from "react";
import { getNews } from "../../../service/service";
import Loader from "../../loader/loader";
import SingleArticle from "../singleArticle/singleArticle";
import "../../sass/sportPage/sportPage.css";
import SearchBar from "../searchBar/searchBar";
import Pagination from "../pagination/pagination";

function Sports(props) {
  const [dataNews, setDataNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [offset, setOffset] = useState(0);
  let category = props.match.params.category;

  useEffect(() => {
    getNews(category, keyword, offset).then((data) => {
      setDataNews(data);
    });
  }, [keyword, offset]);

  if (dataNews.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container_news">
      <div className="searchAndPag">
        <SearchBar
          search={(q) => {
            setKeyword(q); // take keyword from search bar
          }}
        />
        <Pagination
          page={(num) => {
            setOffset(num); // take number for offset
          }}
          total={dataNews.pagination.total}
        />
      </div>
      <div className="container_for_all_articles">
        {/* send data news to single article */}
        {dataNews.data.map((item) => {
          return <SingleArticle data={item} />;
        })}
      </div>
    </div>
  );
}

export default Sports;
