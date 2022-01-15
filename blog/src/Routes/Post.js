import React from "react";
import { useLocation } from "react-router-dom";
export function Post() {
  const location = useLocation();
  const from = location.state;
  return (
    <div className="row">
      <div className="col l4 m6 s10 offset-l4 offset-m3 offset-s1">
        <div className="card hoverable">
          <div className="card-image">
            <img
              src={from.props.cardInfo.Image}
              alt="img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://simple-posts-api-app.herokuapp.com/Uploads/notfound.jpg";
              }}
            />
          </div>
          <div className="card-content ">
            <span className="card-title">{from.props.cardInfo.Title}</span>
            <p>{from.props.cardInfo.Post}</p>
            <hr />
            <p className="blue-text right-align">
              Author: {from.props.cardInfo.Author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
