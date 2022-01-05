import React from "react";
import { useLocation } from "react-router-dom";
export function Post() {
  const location = useLocation();
  const from = location.state;
  console.log(from.props.cardInfo);
  return (
    <div className="row">
      <div className="col">
        <div className="post">
          <div className="card-image">
            <img src={from.props.cardInfo.url_image} className="resposive-img" alt="img" width={200} />
            <span className="card-title">{from.props.cardInfo.title}</span>
          </div>
          <div className="card-content container">
            <p>{from.props.cardInfo.description}</p>
            <hr />
            <p className="blue-text right-align">Author: {from.props.cardInfo.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
