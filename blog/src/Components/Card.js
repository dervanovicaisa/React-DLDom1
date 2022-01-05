import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
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
            />
            <h5 className="center-align">{props.cardInfo.Title}</h5>
          </div>
          <div className="card-content">
            <p className="black-text">
              {" "}
              {props.cardInfo.Post.substring(0, 210)}
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
