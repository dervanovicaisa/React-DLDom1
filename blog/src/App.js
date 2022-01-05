import React from "react";
import "./App.css";
import { Card } from "./Components/Card";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cardInfo: {
        id: "1",
        title: "The Daugthers of Atlas",
        author: "Usha Miran Strand",
        url_image:
          "https://media.istockphoto.com/vectors/book-flat-icon-vector-id901558740?k=20&m=901558740&s=612x612&w=0&h=LtS2bYY-PwHfx7fyL9sfVX3uQjVym8_z8ZCFJ0euLtY=",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo nisi, sollicitudin at urna ac, eleifend dignissim nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean non elit a tellus dapibus suscipit. Aliquam in dolor quis diam porttitor aliquet. Sed et neque nec risus pharetra porttitor sit amet et nulla. Praesent lorem eros, aliquet et libero eget, mattis fermentum leo. Suspendisse in augue mollis, ornare ipsum et, elementum erat.",
      },
      allBlogs: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://jsonblob.com/api/928290770121932800"
    )
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
