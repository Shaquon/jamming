import React, { Component } from 'react'
import Track from '../Track/Track'
import './TrackList.css'


export class TrackList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(function (track) {
                    return <Track key={track.id} track={track} />
                })}
            </div>
        )
    }
}

export default TrackList