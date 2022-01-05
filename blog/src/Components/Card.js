import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <Link
      to={`/post-details/${props.cardInfo.id}`}
      state={{ props }}
    >
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img src={props.cardInfo.url_image} alt="cover img" />
            <h5 className="center-align">{props.cardInfo.title}</h5>
          </div>
          <div className="card-content">
            <p className="black-text">
              {" "}
              {props.cardInfo.description.substring(0, 210)}
            </p>
            <hr />
            <p className="blue-text right-align">
              Author: <i>{props.cardInfo.author}</i>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
