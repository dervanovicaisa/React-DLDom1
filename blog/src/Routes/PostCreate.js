import React from "react";
import "../App.css";

const PostCreate = () => {
  var handleSubmitForm = (event) => {
    event.preventDefault();
    // const apiURL = "https://simple-posts-api-app.herokuapp.com/api/post";
    const apiURL = "http://localhost:8080/api/post";

    const dataJSON = {
      Title: event.target[0].value,
      Author: event.target[1].value,
      Post: event.target[2].value,
      Image: event.target[3].files[0].name,
    };
    var data = new FormData();
    data.append("file", event.target[3].files[0]);
    data.append("data", dataJSON);

    fetch(apiURL, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: data,
    })
      .then((response) => {
        console.log(response);
        console.log(data);
        // let blobUrl = response.headers.get("Location");
        // this.createNotification("success");
        // console.log(blobUrl, "BLOB URL");
      })
      .catch((error) => {
        this.createNotification("error");
        console.log(error);
      });

    return;
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">New post</span>
            <form className="col s12" id="formPost" onSubmit={handleSubmitForm}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="title"
                    type="text"
                    className="validate"
                    data-length="20"
                  />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="author"
                    type="text"
                    className="validate"
                    data-length="20"
                  />
                  <label htmlFor="author">Author</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="post"
                    className="materialize-textarea"
                    data-length="250"
                  ></textarea>
                  <label htmlFor="post">Post</label>
                </div>
              </div>

              <div className="row">
                <div className="file-field input-field">
                  <div className="btn">
                    <span className="centralize">
                      <i className="material-icons">cloud_queue</i> Choose a
                      picture
                    </span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload picture"
                    />
                  </div>
                </div>
              </div>
              <div className="row right-align">
                <button
                  className="btn waves-effect waves-light "
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
