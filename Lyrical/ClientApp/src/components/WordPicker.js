import React, { Component } from 'react';

export default class WordPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { Song: this.props.Song };
    }

    render() {
        if (this.props.Song.Lines.length > 0) {
            return (
                <div id="game-area">
                    <p><b>Full Lyrics (click to complete word)</b></p>
                    {this.renderFullText()}
                    <p><b>Abbreviated Lyrics (click to toggle completion of word)</b></p>
                    {this.renderPartialText()}
                    <div id="bottom-of-page" />
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    renderFullText = () => {        
        return this.props.Song.Lines.map((item, index) => <div className="row"><div className="col-12">{this.renderFullLine(item, index)}</div></div>);
    }

    renderFullLine = (line, lineNo) => {
        return line.Words.map((item, index) =>
            this.renderFullWord(item, lineNo, index)
        )
    }

    renderFullWord = (word, lineNo, wordNo) => {
        const keyValue = `${lineNo}|${wordNo}`;
        return (
            <button className="bth btn-secondary" key={keyValue} onClick={() => this.wordClick(lineNo, wordNo)}>{word.FullWord} </button>
        );
    }

    renderPartialText = () => {
        return this.props.Song.Lines.map((item, index) =>
            <div className="row"><div className="col-12">{this.renderPartialLine(item, index)}</div></div>
        );
    }

    renderPartialLine = (line, lineNo) => {
        return line.Words.map((item, index) =>
            this.renderPartialWord(item, lineNo, index));
    }

    renderPartialWord = (word, lineNo, wordNo) => {
        const keyValue = `${lineNo}|${wordNo}`;
        return (
            <button className="bth btn-secondary" key={keyValue} onClick={() => this.wordClick(lineNo, wordNo)}>{this.getPartialWord(word)} </button>
        );
    }

    getPartialWord = (word) => {
        if (word.Expanded)
            return word.FullWord;
        else
            return word.PartialWord;
    }

    wordClick = (line, word) => {
        this.props.WordClicked(line, word);
    }
}