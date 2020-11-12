import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

const KEY = 'AIzaSyBlIHwXAreyf82lv9sjkCkoyjcdv8mElbE';

class App extends React.Component {
    state = { videos: [] };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
