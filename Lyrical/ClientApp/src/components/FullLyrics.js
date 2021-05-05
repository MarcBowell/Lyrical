import React, { Component } from 'react';

export default class FullLyrics extends Component {   
    constructor(props) {
        super(props);
        this.state = { Lyrics: this.props.Lyrics }
    }

    render() {        
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <button id="clear-button" className="btn btn-danger" onClick={this.clearContentsButtonClick} disabled={this.props.Lyrics === ""}>Clear</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <textarea id="lyrics-text" value={this.props.Lyrics} onChange={this.onTextAreaChange} placeholder="Enter song lyrics here"></textarea>
                    </div>
                </div>
                {this.props.fullLyrics}
            </div>
        );
    }

    clearContentsButtonClick = (e) => {
        this.props.onValueChange("");
    }

    onTextAreaChange = (e) => {        
        this.props.onValueChange(e.target.value);
    }
}