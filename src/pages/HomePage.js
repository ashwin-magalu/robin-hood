import React from "react";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import Stats from "../components/Stats";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__header">
        <Header />
      </div>
      <div className="homePage__body">
        <div className="homePage__bodyContainer">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
