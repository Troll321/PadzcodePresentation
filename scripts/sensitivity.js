import { update } from "./HTMLSEL.js";
import { ww, wh, MIN, MAX } from "./constant.js";

const sliderInputs = document.getElementsByClassName("sliderInput");

function inputHandler(e) {
    if (e.target === sliderInputs[0]) {
        sliderInputs[1].value = sliderInputs[0].value;
    } else {
        sliderInputs[0].value = sliderInputs[1].value;
    }

    const toAdd = (100-e.target.value) / 100 * (MAX - MIN) + MIN;
    update([wh * 6 + toAdd, wh * 5 + toAdd, wh + toAdd], [wh * 4 + toAdd, toAdd], [0, wh]);
}

for (let l = 0; l < sliderInputs.length; l++) {
    const elem = sliderInputs[l];
    elem.addEventListener("input", inputHandler);
}