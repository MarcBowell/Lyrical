import React, { Component } from 'react';
import WordPicker from './WordPicker.js';
import SongClass from '../helpers/SongClass.js';

export default class PartialLyrics extends Component {
    constructor(props) {
        super(props);
        this.state = { PartialLyrics: "", Song: new SongClass() }
    }

    render() {
        return (
            <div>
                <button id="play-button" className="btn btn-success" onClick={this.onCreateShortenedLyricsButtonClick} disabled={this.props.FullLyrics === ""}>Play the game!</button>
                <WordPicker Song={this.state.Song} WordClicked={(line, word) => this.onWordClicked(line, word)} />
            </div>
        );
    }

    onCreateShortenedLyricsButtonClick = (e) => {
        const partialLyrics = this.props.FullLyrics;
        this.setState({ PartialLyrics: partialLyrics });
        const song = new SongClass();
        song.ParseSong(partialLyrics);
        this.setState({ Song: song });

    }

    onWordClicked = (line, word) => {
        let song = this.state.Song;
        song.Lines[line].Words[word].Expanded = !song.Lines[line].Words[word].Expanded;
        this.setState({ Song: song });
    }
}