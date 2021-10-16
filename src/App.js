import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FirstPage from "./components/main/firstPage/firstPage";
import Sports from "./components/main/sportPage/sportPage";
import Technology from "./components/main/tecPage/tecPage";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/mainPage" component={FirstPage} />
          <Route exact path="/technology/:category" component={Technology} />
          <Route exact path="/sports/:category" component={Sports} />
          <Redirect from="/" to="mainPage" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
