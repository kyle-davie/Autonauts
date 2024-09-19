// Drawing, Quick but Inaccurate

var globalGenerators =  []
let generatorCount = 0;
export let mode = 1;
let btnBuild = document.getElementById("buildBtn");
let btnConnect = document.getElementById("connectBtn");
btnBuild.addEventListener('click', buildMode);
btnConnect.addEventListener('click', connectMode);

function buildMode () {
    mode = 1;
    console.log("build");
}

function connectMode() {
    mode = 2;
    console.log("connect");
}

function ifOverButtons(event, x, y) {
    const buttonWrapper = document.getElementById('btnContainer');
    const rect = buttonWrapper.getBoundingClientRect();
    let isOver = false;
    
    const buttonWrapperX = rect.left;
    const buttonWrapperY = rect.top;
    const buttonWrapperWidth = rect.width;
    const buttonWrapperHeight = rect.height;
    const isOverButton = (
        x >= buttonWrapperX &&
        x <= buttonWrapperX + buttonWrapperWidth &&
        y >= buttonWrapperY &&
        y <= buttonWrapperY + buttonWrapperHeight
    );

    if (isOverButton) {
        isOver = true;
    } else {
        isOver = false;
    }
    return isOver;
}

export function drawGenerator(x, y) {
    if (!ifOverButtons(event, x, y)) {
        const generator = document.createElement("div");
        generator.style.backgroundColor = "#bd7431"
        generator.style.width = '20px';
        generator.style.height = '20px';
        generator.style.zIndex = 9999;
        generator.className = 'factory'
        generator.style.boxShadow = '1px 1px 3px 0px rgba(0, 0, 0, 1)';
        generatorCount++;
        generator.id = `factory${generatorCount}`;
        globalGenerators.push({
            name: `factory${generatorCount}`,
            x: x,
            y: y
        });
        generator.style.position = 'absolute';
        generator.style.left = `${x - 10}px`;
        generator.style.top = `${y - 10}px`;
        document.body.appendChild(generator)
    }
}

export function drawLine(x1, y1, x2, y2) {
    if (!ifOverButtons(event, x1, y1)) {
        const start = { x: x1, y: y1 };
        const end = { x: x2, y: y2 };
        const boxSpacing = 9;
        const squareSize = 10;
    
        const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const numBoxes = Math.ceil(distance / boxSpacing);
        const dx = (end.x - start.x) / (numBoxes - 1);
        const dy = (end.y - start.y) / (numBoxes - 1);
    
        for (let i = 1; i < numBoxes; i++) {
            const x = start.x + dx * i;
            const y = start.y + dy * i; 
            console.log(`start: x: ${start.x}, y: ${start.y} | end: x: ${end.x}, y: ${end.y}    scout.js`);
            const square = document.createElement('div');
            square.className = 'square';
            square.style.backgroundColor = 'rgba(40, 194, 214, 0.637)';
            square.style.position = 'absolute'; 
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.left = `${x}px`;
            square.style.top = `${y}px`;
            document.body.appendChild(square);
        }
    }

}

