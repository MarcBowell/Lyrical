import SongLine from "./SongLine.js";

export default class SongClass {
    Lines = [];
    ParseSong(song) {
        let result = new Set();
        const allLines = song.split("\n");
        allLines.forEach(function (item, index) {
            const line = new SongLine();
            line.ParseLine(item);
            result.add(line);
        });
        this.Lines = Array.from(result);
    }
}