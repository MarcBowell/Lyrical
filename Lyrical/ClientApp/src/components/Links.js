import React, { Component } from 'react';

export class Links extends Component {
    render() {
        return (
            <div>
                <h1>Useful links</h1>
                <p>Finding lyrics...</p>
                <ul>
                    <li><a href="https://www.azlyrics.com/" target="_blank">AZLyrics</a></li>
                    <li><a href="https://genius.com/" target="_blank">Genius Lyrics</a></li>
                    <li><a href="https://www.metrolyrics.com/" target="_blank">Metro Lyrics</a></li>
                </ul>
                <p>A selection of songs...</p>
                <ul>
                    <li><a href="https://www.officialcharts.com/chart-news/the-best-selling-singles-of-all-time-on-the-official-uk-chart__21298/" target="_blank">Top UK sellers</a></li>
                    <li><a href="https://www.nme.com/photos/50-best-selling-tracks-of-the-90s-1437045" target="_blank">Songs from the 90s</a></li>
                    <li><a href="https://www.simplyeighties.com/80s-music---best.php#.YJGOg-V1Hcs" target="_blank">Songs from the 80s</a></li>
                    <li><a href="https://www.superseventies.com/singles.html" target="_blank">Songs from the 70s</a></li>
                    <li><a href="https://www.whatsonstage.com/bath-theatre/news/the-top-100-showtunes-of-all-time_45166.html" target="_blank">Musicals!</a></li>                    
                </ul>
            </div>
        );
    }
}