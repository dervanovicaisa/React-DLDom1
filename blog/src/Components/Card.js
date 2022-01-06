import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  var addSpace = (len) => {
    const spaces = Array(len).fill("");
    return spaces.join(" ");
  };
  return (
    <Link to={`/post-details/${props.cardInfo.PostID}`} state={{ props }}>
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img
              src={
                "https://simple-posts-api-app.herokuapp.com/Uploads/" +
                props.cardInfo.Image
              }
              alt="cover img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://simple-posts-api-app.herokuapp.com/Uploads/notfound.jpg";
              }}
            />
            <h5 className="center-align">{props.cardInfo.Title}</h5>
          </div>
          <div className="card-content">
            <p className="black-text">
              {" "}
              {props.cardInfo.Post.substring(0, 100).length < 100
                ? props.cardInfo.Post
                : props.cardInfo.Post.substring(0, 100) + "..."}
            </p>
            <hr />
            <p className="blue-text right-align">
              Author: <i>{props.cardInfo.Author}</i>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
