import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Post } from "./Routes/Post";
import PostCreate from "./Routes/PostCreate";
import Navbar from "./Components/Navbar";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/post-details/:id" element={<Post />} />
          <Route path="/add-post" element={<PostCreate />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
