import { useEffect, useState } from "react";
import { getNews } from "../../../service/service";
import Loader from "../../loader/loader";
import SingleArticle from "../singleArticle/singleArticle";
import "../../sass/allArticles/allArticles.css";
import SearchBar from "../searchBar/searchBar";
import Pagination from "../pagination/pagination";

function AllArticles({ categ }) {
  const [dataNews, setDataNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [offset, setOffset] = useState(0);
  const [bttAscDesc, setBttAscDesc] = useState("published_desc");
  const [order, setOrder] = useState("oldest published");
  let category = categ;

  // option to sort article by date of published
  const changeOrderNewsByPublished = () => {
    if (bttAscDesc === "published_desc") {
      setBttAscDesc("published_asc");
      setOrder("latest published");
    } else {
      setBttAscDesc("published_desc");
      setOrder("oldest published");
    }
  };

  useEffect(() => {
    getNews(category, keyword, offset, bttAscDesc).then((data) => {
      setDataNews(data);
    });
  }, [keyword, offset, bttAscDesc]);

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
        <button onClick={changeOrderNewsByPublished}>{order}</button>
      </div>
      <div className="container_for_all_articles">
        {/* send data news to single article */}
        {dataNews.data.map((item, index) => {
          return <SingleArticle data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AllArticles;
