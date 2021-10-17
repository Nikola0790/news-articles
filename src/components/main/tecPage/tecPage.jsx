import AllArticles from "../allArticles/allArticles";

function Technology(props) {
  let category = props.match.params.category;

  return <AllArticles categ={category} />;
}

export default Technology;
