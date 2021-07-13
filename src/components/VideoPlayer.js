import React from 'react';

export default class videoPlayer extends React.Component {
  render() {
    // var videoId = this.props.video.id.videoId;
    // console.log('videoplayer', this.props.video.id.videoId);
    let video = this.props.video;
    console.log('video', video);
    var v = Object.assign({}, video);
    var x = Object.assign({}, v.id);
    console.log('x', x);
    let videoId = x.videoId;
    console.log('videoId', videoId);
    return (
      <div>
        <iframe
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          frameBorder='0'
        ></iframe>
      </div>
    );
  }
}
