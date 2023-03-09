import React, { Component } from 'react'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../../SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ id: 1, name: 'Bohemian Rhapsody', artist: "Queen", album: "The greatest hits" }, { id: 2, artist: 'Pink Floyd', album: "The Dark Side of the Moon", name: 'Money' }, { id: 3, name: '5 Years', artist: "David Bowie", album: "The rise and fall of Ziggy Stardust and the Spiders from Mars" }],
      playlistTracks: [{ id: 1, name: 'Bohemian Rhapsody', artist: "Queen", album: "The greatest hits" }, { id: 2, artist: 'Pink Floyd', album: "The Dark Side of the Moon", name: 'Money' }, { id: 3, name: '5 Years', artist: "David Bowie", album: "The rise and fall of Ziggy Stardust and the Spiders from Mars" }],
      playlistName: ''
    }
  }

  addTrack(track) {
    for (let playlistTrack of this.state.playlistTracks) {
      if (track.id === playlistTrack.id) {
        return 'Song already in Playlist.'
      }
    }

    this.state.playlistTracks.push(track);
    console.log('Tracklist after adding: ', this.state.playlistTracks);
  }

  render() {
    this.addTrack({ id: 5, name: 'Another song!', artist: "Kiss", album: "The greatest hits" })
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App