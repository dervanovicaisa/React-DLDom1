import React from "react";

const Card = () => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-Rmh977-3igeJeqFnYtR-X5AtzLc3eZ0hg&usqp=CAU"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Card Title<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
