import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, videoClicked }) => {

  const renderedList = videos.map((video) => {
    return (<VideoItem key={video.id.videoId} video={video} videoClicked={videoClicked} />);
  });

  return (
    <div className='ui relaxed divided list'>{renderedList}</div>
  );
}

export default VideoList;