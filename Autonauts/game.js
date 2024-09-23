import {drawGenerator, drawCrafter, drawLine, mode} from './scout.js';
let firstClick = null;
let secondClick = null;
let buildMenuOpen = false;


export function hide() {
    buildMenu(2);
}

export function draw(event) {
    const x = event.clientX;
    const y = event.clientY;
    if (!buildMenuOpen) {
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
        } else if (mode == 3) {
            drawCrafter(x, y);
        }
    }
};


export function buildMenu(choice) {
    const menu = document.getElementById("buildMenu");
    if (choice == 1) {
        menu.style.display = 'grid';
        buildMenuOpen = true;
    } else {
        menu.style.display = 'none';
        buildMenuOpen = false;
    }
}

window.addEventListener('load', hide);
document.getElementById('closeBtn').addEventListener('click', () => buildMenu(2));
document.getElementById('buildBtn').addEventListener('click', () => buildMenu(1));
document.addEventListener('mousedown', draw);