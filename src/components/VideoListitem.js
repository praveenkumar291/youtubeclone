import React from 'react';

export default class videoListitem extends React.Component {
  render() {
    console.log('obj', this.props.video.snippet);
    console.log(this.props.video.snippet.thumbnails.default.url);
    return (
      <div>
        <li onClick={() => this.props.onVideoSelect(this.props.video)}>
          <img
            src={this.props.video.snippet.thumbnails.default.url}
            alt=''
          ></img>
          <span>{this.props.video.snippet.title}</span>
        </li>
      </div>
    );
  }
}
