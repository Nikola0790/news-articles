import React from "react";
import "../../sass/singleArticle/singleArticle.css";
import defaultImg from "../../../img/profile_placeholder.gif";

const SingleArticle = ({ data }) => {
  let day = new Date(data.published_at).getDate();
  let month = new Date(data.published_at).getMonth() + 1;
  let year = new Date(data.published_at).getFullYear();

  if (data.image === null) {
    return (
      <div className="single_article">
        <img src={defaultImg} alt="image" />
        <div className="article_data">
          <div className="descrip">
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </div>
          <div className="autPub">
            <p>by: {data.author}</p>
            <p>
              published: {day}-{month}-{year}
            </p>
          </div>
          <div className="link">
            <a href={data.url} target="_blank">
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="single_article">
      <img src={data.image} alt="image" />
      <div className="article_data">
        <div className="descrip">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </div>
        <div className="autPub">
          <p>by: {data.author}</p>
          <p>
            published: {day}-{month}-{year}
          </p>
        </div>
        <div className="link">
          <a href={data.url} target="_blank">
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
