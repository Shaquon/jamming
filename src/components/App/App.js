import React, { Component } from 'react'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../../SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ id: 1, name: 'track 1' }, { id: 2, name: 'track 2' }, { id: 3, name: 'track 3' }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App