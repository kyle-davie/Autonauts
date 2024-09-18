import {drawGenerator, drawLine} from './scout.js';

export function spawnGenerator(event) {
    const x = event.clientX;
    const y = event.clientY;
    drawGenerator(x, y);
    drawLine(x, y, 200, 50);
};

document.addEventListener('mousedown', spawnGenerator);