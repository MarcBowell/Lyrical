import SongWord from "./SongWord.js";

export default class SongLine {
    Words = [];
    ParseLine(line) {
        let result = new Set();
        line = line.replace(/-/g, " ");
        const allWords = line.split(" ");        
        allWords.forEach(function(item, index) {
            const alphaCharacters = Array.from(item).filter(i => /^[A-Z]$/i.test(i));
            if (alphaCharacters.length > 0) {
                const word = new SongWord();
                word.FullWord = item;
                word.PartialWord = alphaCharacters[0].toUpperCase();
                result.add(word);
            }
        })
        this.Words = Array.from(result);
    }
}