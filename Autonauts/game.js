import {drawGenerator, drawLine} from './scout.js';

export function spawnGenerator(event) {
    const x = event.clientX;
    const y = event.clientY;
    drawGenerator(x, y);
    drawLine(x, y, 250, 250);
    console.log(x + y + " game.js")
};

document.addEventListener('mousedown', spawnGenerator);
