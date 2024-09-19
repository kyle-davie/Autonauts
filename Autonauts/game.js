import {drawGenerator, drawLine, mode} from './scout.js';
let firstClick = null;
let secondClick = null;


export function draw(event) {
    const x = event.clientX;
    const y = event.clientY;
    if (mode == 1) {
        drawGenerator(x, y);
    } else if (mode == 2) {
        
        if (firstClick === null) {
            firstClick = { x, y };
        } else if (secondClick === null) {
            secondClick = { x, y };
            drawLine(firstClick.x, firstClick.y, secondClick.x, secondClick.y);
            firstClick = null;
            secondClick = null;
        }
    }
};

document.addEventListener('mousedown', draw);