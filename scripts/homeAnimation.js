import { ww, wh } from "./constant.js";

const N = 8;
const MINVEL = 1;
const MAXVEL = 3;
let width = 0, height = 0;

const coor = [], vel = [];

function rand(low, up) {
    return Math.random() * (up-low) + low;
}

// Create
for (let l = 0; l < N; l++) {
    const nowElem = document.createElement("div");
    nowElem.classList.add("child");

    coor.push({x: l / N * (ww - width), y: l / N * (wh - height)});
    vel.push({x: rand(-MAXVEL, MAXVEL), y: (Math.round(Math.random()) ? 1 : -1) * rand(MINVEL, MAXVEL)});   
    nowElem.innerHTML = `<h1>${(Math.round(Math.random()) ? "Padz" : "Code")}</h1>`;
    document.getElementById("home").appendChild(nowElem);
}

function updateCoor() {
    for (let l = 0; l < N; l++) {
        coor[l].x += vel[l].x;
        coor[l].y += vel[l].y;
    }    
}

function draw() {
    for (let l = 0; l < N; l++) {
        document.getElementsByClassName("child")[l].style.top = coor[l].y + "px";
        document.getElementsByClassName("child")[l].style.left = coor[l].x + "px";
    }
}

function cek(i, j) {
    const obi = {
        left: coor[i].x, 
        right: coor[i].x + width,
        top: coor[i].y,
        bot: coor[i].y + height
    }

    const obj = {
        left: coor[j].x, 
        right: coor[j].x + width,
        top: coor[j].y,
        bot: coor[j].y + height
    }

    if (obi.left >= obj.right || obi.right <= obj.left ||
        obi.bot <= obj.top || obi.top >= obj.bot) {
        return 0;
    }
    return 1;
}

function cek2(i) {
    const obi = {
        left: coor[i].x, 
        right: coor[i].x + width,
        top: coor[i].y,
        bot: coor[i].y + height
    }

    if (obi.top <= 0 || obi.bot >= wh) {
        vel[i].y *= -1;
    }

    if (obi.left <= 0 || obi.right >= ww) {
        vel[i].x *= -1;
    }
}

export function set() {
    width = parseInt(getComputedStyle(document.getElementsByClassName("child")[0]).width);
    height = parseInt(getComputedStyle(document.getElementsByClassName("child")[0]).height);
}

set();

export function homeLoop() {
    updateCoor();
    for (let l = 0; l < N; l++) {
        for (let j = l+1; j < N; j++) {
            if(cek(l, j)) {
                vel[l].x *= -1;
                vel[l].y *= -1;
                vel[j].x *= -1;
                vel[j].y *= -1;
            }
        }
    }

    for (let l = 0; l < N; l++) {
        cek2(l);
    }

    draw();
}

window.addEventListener("resize", ()=>{set()});