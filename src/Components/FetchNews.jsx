import React, { useState } from "react";
import axios from "axios";
export default function FetchNews() {
  const [state , setState] = useState([])
 const fetchNews = () =>{
   axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1877fb5c99ff40c9a051ed08ece32067")
   .then((response)=>{
     console.log(response);
   })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>FetchNews</button>
          </div>
        </div>
      </div>
    </>
  );
}
