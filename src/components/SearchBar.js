import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
    };
  }

  updateState = (e) => {
    this.setState({ term: e.target.value });
    this.props.onVideoSearch(this.state.term);
  };
  render() {
    return (
      <div>
        <form style={{ padding: '20px' }}>
          <input type='text' onChange={this.updateState} name='term'></input>
        </form>
        {this.state.term}
      </div>
    );
  }
}
