import React from "react";
import "./App.css";
import { Card } from "./Components/Card";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      allBlogs: [],
    };
  }
  handleCardInfoChange = (cardInfo) => {
    this.setState({ cardInfo });
  };
  componentDidMount() {
    fetch("https://simple-posts-api-app.herokuapp.com/api/post")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let allBlogs = response;
        this.setState({ allBlogs: allBlogs });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  blogsToShow() {
    let allBlogs = this.state.allBlogs;
    return allBlogs.map((el, index) => {
      return <Card cardInfo={el} key={index}></Card>;
    });
  }

  render() {
    return (
      <div>
        <h3 className="title center-align">All Posts</h3>
        <div className="row container">{this.blogsToShow()}</div>
      </div>
    );
  }
}

export default App;
