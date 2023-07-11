export let ww = window.outerWidth;
export let wh = window.outerHeight;
export let MIN = -5 * wh;
export let MAX = 5 * wh;
import { update } from "./HTMLSEL.js";

window.addEventListener("resize", ()=>{
    ww = window.outerWidth;
    wh = window.outerHeight;
    MIN = -5 * wh;
    MAX = 5 * wh;
    const toAdd = (100-document.getElementsByClassName("sliderInput")[0].value) / 100 * (MAX - MIN) + MIN;
    update([wh * 6 + toAdd, wh * 6 + toAdd,  wh + toAdd], [wh * 4 + toAdd, wh + toAdd], [0, wh]);
});