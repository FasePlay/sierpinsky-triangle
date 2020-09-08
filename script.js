const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let triangleDots = [
    {
        name: "A",
        x: 400,
        y: 50
    },
    {
        name: "B",
        x: 50,
        y: 550
    },
    {
        name: "C",
        x: 750,
        y: 550
    }
]

let dots = [
    {
        x: triangleDots[0].x,
        y: triangleDots[0].y
    }
];


let interval = setInterval(drawCanvas, 1);

function drawCanvas() {
    createDot();
    drawElements();
}

function drawElements() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';

    for (let i = 0; i < triangleDots.length; i++) {
        ctx.beginPath();
        ctx.arc(triangleDots[i].x, triangleDots[i].y, 0.1, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    for (let i = 0; i < dots.length; i++) {
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, 0.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}


function createDot() {
    const
        randomTriangleDot = triangleDots[Math.floor(Math.random() * 3)],
        lastIndex = dots.length - 1;

    if (randomTriangleDot.name === "A") {
        //search Y
        const distanceToDotY = dots[lastIndex].y - randomTriangleDot.y;
        const distanceHalfY = distanceToDotY / 2;

        //search X
        let distanceToDotX, distanceHalfX;
        if (randomTriangleDot.x > dots[lastIndex].x) {
            distanceToDotX = randomTriangleDot.x - dots[lastIndex].x;
            distanceHalfX = distanceToDotX / 2;
        } else {
            distanceToDotX = dots[lastIndex].x - randomTriangleDot.x;
            distanceHalfX = distanceToDotX / 2;
        }

        dots.push({
            x: randomTriangleDot.x === dots[lastIndex].x ? randomTriangleDot.x : randomTriangleDot.x > dots[lastIndex].x ? randomTriangleDot.x - distanceHalfX : randomTriangleDot.x + distanceHalfX,
            y: randomTriangleDot.y + distanceHalfY
        });
    } else if (randomTriangleDot.name === "B") {
        //search Y
        const distanceToDotY = randomTriangleDot.y - dots[lastIndex].y;
        const distanceHalfY = distanceToDotY / 2;

        //search X
        const distanceToDotX = dots[lastIndex].x - randomTriangleDot.x;
        const distanceHalfX = distanceToDotX / 2;

        dots.push({
            x: randomTriangleDot.x + distanceHalfX,
            y: dots[lastIndex].y + distanceHalfY
        });
    } else if (randomTriangleDot.name === "C") {
        //search Y
        const distanceToDotY = randomTriangleDot.y - dots[lastIndex].y;
        const distanceHalfY = distanceToDotY / 2;

        //search X
        const distanceToDotX = randomTriangleDot.x - dots[lastIndex].x;
        const distanceHalfX = distanceToDotX / 2;

        dots.push({
            x: randomTriangleDot.x - distanceHalfX,
            y: dots[lastIndex].y + distanceHalfY
        });
    }
}