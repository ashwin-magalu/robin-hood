import React, { useState, useEffect } from "react";
import "./NewsFeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";
import { Avatar, Chip } from "@material-ui/core";

const NewsFeed = () => {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="newsFeed">
      <div className="newsFeed__container">
        <div className="newsFeed__chartSection">
          <div className="newsFeed__portfolio">
            <h1>$114,876</h1>
            <p>+$44.65 (+0.04%) Today</p>
          </div>

          <div className="newsFeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Closed</p>
            <h1> Happy Thanksgiving</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
