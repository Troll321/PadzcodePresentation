export let ww = window.outerWidth;
export let wh = window.outerHeight;
import { update } from "./HTMLSEL.js";

window.addEventListener("resize", ()=>{
    ww = window.outerWidth;
    wh = window.outerHeight;
    const percent = (100-parseInt(document.getElementsByClassName("sliderInput")[0].value)) / 100;
    update([wh * 6 * percent, wh * 6 * percent,  wh * percent], [wh * 4 * percent, wh * percent], [0, wh * percent]);
});