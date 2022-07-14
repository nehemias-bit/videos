import React from "react";
import "../styles/VideoItem.css";

const VideoItem = ({ video, videoClicked }) => {



  return (
    <div onClick={() => videoClicked(video)} className="item video-item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;