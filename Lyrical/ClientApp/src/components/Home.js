import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Lyrical</h1>
        <p>The online singing game for two or more people</p>
        <h4>Rules</h4>
        <p>To play, the "singer" should click on <Link to="/partial-song">play</Link> from the menu above and follow the rules below:</p>
        <ul>
            <li><span className="identity">Singer:</span> Enter a section of lyrics from a well known song into the box provided</li>
            <li><span className="identity">Singer:</span> Click on "Play the game"</li>
            <li><span className="identity">Singer:</span> Read the abbreviated lyrics to the contestant(s)</li>      
            <li><span className="identity">Contestant(s):</span> Try to guess the identity of the song from the lyric abbreviations</li>
            <li><span className="identity">Singer:</span> If the song cannot be identified, sing the abbreviated lyrics in the original tune of the song</li>
            <li><span className="identity">Contestant(s):</span> Try to guess the identity of the song once more</li>
            <li><span className="identity">Singer:</span> If the song still cannot be identified, complete some of the abbreviated lyrics (but not the song title) and sing again</li>
            <li>...</li>
            <li>Repeat the final steps until the song can be identified or all the abbreviated lyrics (minus the song title) have been completed</li>
        </ul>
      </div>
    );
  }
}
