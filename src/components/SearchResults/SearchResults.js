import React, { Component } from 'react'
import Tracklist from '../Tracklist/TrackList'
import './SearchResults.css'

export class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults