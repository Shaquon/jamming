import React, { Component } from 'react'
import Track from '../Track/Track'
import './TrackList.css'


export class TrackList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('our tracks in Tracks component: ', this.props.tracks)
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => {
                    return <Track track={track} />
                })}
            </div>
        )
    }
}

export default TrackList