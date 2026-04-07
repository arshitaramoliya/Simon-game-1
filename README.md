# Simon Says — Memory Game

An interactive browser-based implementation of the classic **Simon Says** memory game, built with vanilla JavaScript.

## How to Play

1. Press any key to start the game
2. Watch the sequence of coloured flashes
3. Repeat the sequence by clicking the buttons in the same order
4. Each round adds one more step — how far can you go?

## Features

- Randomly generated colour sequences that grow each round
- Visual flash feedback for both game and user moves
- Wrong answer detection with game-over animation
- Level counter displayed on screen
- Fully keyboard-initiated start

## Technical Highlights

- **Sequence management** — separate arrays track game sequence vs. user input (`gameSeq[]`, `userSeq[]`)
- **DOM manipulation** — dynamic class toggling for flash effects without any framework
- **Event delegation** — single click handler manages all four colour buttons
- **Game state machine** — level progression, win/loss detection, and reset logic in pure JS

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-dc2626?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-dc2626?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-dc2626?style=flat-square&logo=javascript&logoColor=white)

## Files

| File | Description |
|---|---|
| `Simon.html` | Game layout and button structure |
| `Simon.css` | Colour themes, flash animations, layout |
| `Simon.js` | Full game logic — sequences, levels, events |
