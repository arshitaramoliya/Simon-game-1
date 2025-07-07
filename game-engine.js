/**
 * Simon Game Engine — separated from DOM logic
 * Handles all game state: sequences, levels, validation
 */
const GameEngine = (() => {
    const COLOURS = ['red', 'blue', 'green', 'yellow'];
    let gameSeq = [];
    let userSeq = [];
    let level = 0;
    let started = false;

    function nextLevel() {
        level++;
        userSeq = [];
        const next = COLOURS[Math.floor(Math.random() * COLOURS.length)];
        gameSeq.push(next);
        return { level, sequence: [...gameSeq], next };
    }

    function recordUserInput(colour) {
        userSeq.push(colour);
        const idx = userSeq.length - 1;
        if (userSeq[idx] !== gameSeq[idx]) {
            return { correct: false, level };
        }
        if (userSeq.length === gameSeq.length) {
            return { correct: true, complete: true, level };
        }
        return { correct: true, complete: false };
    }

    function reset() {
        gameSeq = [];
        userSeq = [];
        level = 0;
        started = false;
    }

    function start() { started = true; return nextLevel(); }
    function isStarted() { return started; }

    return { start, nextLevel, recordUserInput, reset, isStarted, COLOURS };
})();

if (typeof module !== 'undefined') module.exports = GameEngine;
