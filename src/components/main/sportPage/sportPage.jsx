import AllArticles from "../allArticles/allArticles";

function Sports(props) {
  let category = props.match.params.category;

  return <AllArticles categ={category} />;
}

export default Sports;
