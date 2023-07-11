export let ww = window.innerWidth;
export let wh = window.innerHeight;
export let MIN = -5 * wh;
export let MAX = 5 * wh;
import { update } from "./HTMLSEL.js";

window.addEventListener("resize", ()=>{
    ww = window.innerWidth;
    wh = window.innerHeight;
    MIN = -5 * wh;
    MAX = 5 * wh;
    const toAdd = (100-document.getElementsByClassName("sliderInput")[0].value) / 100 * (MAX - MIN) + MIN;
    update([wh * 2 + toAdd, wh * 5 + toAdd, wh + toAdd], [toAdd, toAdd], [0, wh]);
});