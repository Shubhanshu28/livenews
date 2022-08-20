import React, { useState } from "react";
import axios from "axios";
export default function FetchNews() {
  const [state, setState] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=1877fb5c99ff40c9a051ed08ece32067"
      )
      .then((response) => {
        setState(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
