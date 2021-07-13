import React from 'react';
import VideoListItem from './VideoListitem';
export default class VideoList extends React.Component {
  renderVideoList = () => {
    const videoList = this.props.videos.map((video) => {
      console.log(video);
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video}
        ></VideoListItem>
      );
    });

    return videoList;
  };

  render() {
    return (
      <div>
        <ul>{this.renderVideoList()}</ul>
      </div>
    );
  }
}
