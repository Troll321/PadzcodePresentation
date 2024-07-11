import { update } from "./HTMLSEL.js";
import { wh } from "./constant.js";

const sliderInputs = document.getElementsByClassName("sliderInput");

function inputHandler(e) {
    if (e.target === sliderInputs[0]) {
        sliderInputs[1].value = sliderInputs[0].value;
    } else {
        sliderInputs[0].value = sliderInputs[1].value;
    }

    const percent = (100-parseInt(e.target.value)) / 100;
    update([wh * 6 * percent, wh * 6 * percent,  wh * percent], [wh * 4 * percent, wh * percent], [0, wh * percent]);
}

for (let l = 0; l < sliderInputs.length; l++) {
    const elem = sliderInputs[l];
    elem.addEventListener("input", inputHandler);
}