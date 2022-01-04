import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <Link
      to={{
        pathname: `/post-details/${props.cardInfo.id}`,
        aboutProps: props.cardInfo,
      }}
    >
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={props.cardInfo.url_image}
              alt="img"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {props.cardInfo.title}
              <i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {props.cardInfo.author}
              <i className="material-icons right">close</i>
            </span>
            <p>{props.cardInfo.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
