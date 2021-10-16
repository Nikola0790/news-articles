import { Fragment } from "react";
import "../sass/loader/loader.css";

const Loader = () => {
  return (
    <Fragment>
      <div className="example">
        <div className="sk-grid">
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
          <div className="sk-grid-cube"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
