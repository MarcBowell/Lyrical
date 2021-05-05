import React, { Component } from 'react';
import FullLyrics from "./FullLyrics.js";
import PartialLyrics from './PartialLyrics.js';

export class PartialSongGame extends Component {
    constructor(props) {
        super(props);
        this.state = { originalSongLyrics: "" };
    }

    render() {
        return (
            <div>                
                <FullLyrics onValueChange={this.fullLyricsChange} Lyrics={this.state.originalSongLyrics} />
                <PartialLyrics FullLyrics={this.state.originalSongLyrics} />
            </div>
        ); 
    }

    fullLyricsChange = (value) => {
        this.setState({ originalSongLyrics: value });
    }
}