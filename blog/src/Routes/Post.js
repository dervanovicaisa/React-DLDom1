import React from "react";

export function Post(props) {
console.log(props.location.aboutProps);
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="images/sample-1.jpg" alt="img" />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
