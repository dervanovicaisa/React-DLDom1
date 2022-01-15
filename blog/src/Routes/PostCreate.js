import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { toast } from "react-toastify";
// import "/react-toastify/dist/ReactToastify.css";

const PostCreate = (props) => {
  let navigate = useNavigate();
  const [valid, setValid] = useState(Array(6).fill(true));
  const [errorMessages, setErrorMessages] = useState(Array(6).fill(null));

  var setValidation = (validType, i, errorMessage = "") => {
    var validTemp = valid;
    validTemp[i] = validType;

    var errorMessagesTemp = errorMessages;
    errorMessagesTemp[i] = errorMessage;

    setValid(validTemp);
    setErrorMessages(errorMessagesTemp);
  };
  var createNotification = (type, errorMessage = "") => {
    const options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    switch (type) {
      case "success":
        toast.success("Successful request", options);
        break;
      case "warning":
        toast.warn(errorMessage, options);

        break;
      case "error":
        toast.error("Unexpected error", options);
        break;
      default:
    }
  };

  var fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        resolve("");
      }
    });

  var handleSubmitForm = async (event) => {
    event.preventDefault();

    const apiURL = "https://simple-posts-api-app.herokuapp.com/api/post";
    // const apiURL = "http://localhost:8080/api/post";

    // Validacija
    for (var i = 0; i < 3; i++) {
      const element = event.target[i];
      const length = element.value.length;
      switch (element.name) {
        case "Title":
          if (length > 20)
            setValidation(false, 0, "Naslov je veci od 20 karaktera!");
          else setValidation(true, 0);

          break;
        case "Author":
          if (length > 20)
            setValidation(false, 1, "Naziv autora je veci od 20 karaktera!");
          else setValidation(true, 1);

          break;
        case "Post":
          if (length > 250)
            setValidation(false, 2, "Post je veci od 250 karaktera!");
          else setValidation(true, 2);

          break;

        default:
      }
    }

    if (valid.includes(false)) {
      for (var j = 0; j < 6; j++) {
        var validTemp = valid;
        var errorMessagesTemp = errorMessages;
        if (!validTemp[j]) {
          createNotification("warning", errorMessagesTemp[j]);
        }
      }

      return;
    }
    const img = await fileToDataUri(event.target[3].files[0]);
    const dataJSON = {
      Title: event.target[0].value,
      Author: event.target[1].value,
      Post: event.target[2].value,
      Image: img,
    };
    var data = new FormData();
    data.append("file", event.target[3].files[0]);
    data.append("data", JSON.stringify(dataJSON));

    fetch(apiURL, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        console.log(response);
        createNotification("success");
        navigate("/");
      })
      .catch((error) => {
        createNotification("error");
        console.log(error);
      });

    return;
  };

  return (
    <div className="row container">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">New post</span>
            <form className="col s12" id="formPost" onSubmit={handleSubmitForm}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="title"
                    name="Title"
                    type="text"
                    className="validate"
                    data-length="20"
                    required
                  />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="author"
                    name="Author"
                    type="text"
                    className="validate"
                    data-length="20"
                    required
                  />
                  <label htmlFor="author">Author</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="post"
                    name="Post"
                    className="materialize-textarea"
                    data-length="250"
                    required
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
                    <input type="file" name="ImageBlob" />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      name="Image"
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
