import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export function Card(props) {
  var addSpace = (len) => {
    const spaces = Array(len).fill("");
    return spaces.join(" ");
  };
  return (
    <Link to={`/post-details/${props.cardInfo.PostID}`} state={{ props }}>
      <div className="col l4 m6 s12">
        <div className="card large hoverable">
          <div className="card-image">
            <img
              src={props.cardInfo.Image}
              alt="cover img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://simple-posts-api-app.herokuapp.com/Uploads/notfound.jpg";
              }}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content"> </div>
            <div className="card-action">
              <span className="card-title activator grey-text text-darken-4">
                {props.cardInfo.Title}
              </span>

              <p className="black-text">
                {" "}
                {props.cardInfo.Post.substring(0, 100).length < 100
                  ? props.cardInfo.Post
                  : props.cardInfo.Post.substring(0, 100) + "..."}
              </p>
              {/* <hr /> */}
              <hr></hr>
              <p className="blue-text right-align">
                Author: <i>{props.cardInfo.Author}</i>
              </p>
            </div>
            {/* <h5 className="center-align">{props.cardInfo.Title}</h5> */}
          </div>
          {/* <div className="card-action"> */}
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
}
