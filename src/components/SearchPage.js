import React from "react";
import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image=""
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome Programming video content"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="656K"
        description="Do you want a FREE one hour training..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image=""
      />
    </div>
  );
}

export default SearchPage;
