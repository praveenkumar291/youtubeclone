import logo from './logo.svg';
import './App.css';

import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }
  componentDidMount() {
    // let currentState = this;
    this.videoSearch('telugusongs');
    console.log('app initialized');
    // YTSearch(
    //   {
    //     term: 'lovevideo songs',
    //     key: 'AIzaSyBr9qHd0AFKzU6hYxtjYXKgPn4Iah6yISE',
    //   },
    //   function (videos) {
    //     console.log(videos);
    //     currentState.setState({ videos: videos, selectedVideo: videos[0] });
    //   }
    // );
  }
  videoSearch = (term) => {
    let currentState = this;

    YTSearch(
      {
        term: term,
        key: 'AIzaSyBr9qHd0AFKzU6hYxtjYXKgPn4Iah6yISE',
      },
      function (videos) {
        console.log(videos);
        currentState.setState({ videos: videos, selectedVideo: videos[0] });
      }
    );
  };

  render() {
    return (
      <div>
        <SearchBar
          onVideoSearch={(term) => {
            setTimeout(() => {
              this.videoSearch(term);
            }, 2000);
          }}
        />
        <br></br>
        <VideoPlayer video={this.state.selectedVideo} />
        <br></br>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
