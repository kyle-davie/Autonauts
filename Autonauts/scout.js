// Drawing, Quick but Inaccurate

var globalGenerators =  []
let generatorCount = 0;

export function drawGenerator(x, y) {
    const generator = document.createElement("div");
    generator.style.backgroundColor = "#bd7431"
    generator.style.width = '20px';
    generator.style.height = '20px';
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

export function drawLine(x1, y1, x2, y2 ) {
    // Bresenham's Line Algorithm
    const squareSize = 5;
    const points = [];

    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = (x1 < x2) ? 1 : -1;
    const sy = (y1 < y2) ? 1 : -1;
    let err = dx - dy;

    let x = x1;
    let y = y1;

    while (true) {
        points.push([x, y]);

        if (x === x2 && y === y2) break;

        const e2 = err * 2;
        if (e2 > -dy) {
            err -= dy;
            x += sx;
        }
        if (e2 < dx) {
            err += dx;
            y += sy;
        }
    }

    points.forEach(point => {
        const [x, y] = point;
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = 'red';
        square.position = 'absolute';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
        document.body.appendChild(square);
    });
}
