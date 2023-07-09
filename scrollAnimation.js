import * as HSEL from "./HTMLSEL.js";

var ww = window.innerWidth;
var wh = window.innerHeight;

HSEL.init([wh * 2, wh * 5, wh, wh], [0, 0], [0, wh]);

// HSEL.register(0, [0, 1], true, ()=>{}, ()=>{}, (per)=>{console.log(per)});

// BODY ANIMATION
const bodyLine = document.getElementsByClassName("bodyLine");
const rbcon = document.getElementsByClassName("rbcon")[0];
const linecon = document.getElementsByClassName("lineContainer")[0];
const bsvg = document.getElementsByClassName("bodySVG");
const body = document.getElementById("body");
const homeline = document.getElementById("homeline");

HSEL.register(0, [0.55, 1, 0.75], false,
    ()=>{
        for (let l = 0; l < bsvg.length; l++) {
            const elem = bsvg[l];
            elem.classList.add("hidden");
        }
    },
    ()=>{
        for (let l = 0; l < bsvg.length; l++) {
            const elem = bsvg[l];
            elem.classList.remove("hidden");
        }
    }
);

HSEL.register(0, [0.55, 0.61], true,
    ()=>{bodyLine[2].style.transform = "rotateZ(0deg)";},
    ()=>{bodyLine[2].style.transform = "rotateZ(-90deg)";},
    (percent)=>{bodyLine[2].style.transform = `rotateZ(${HSEL.countAP(percent, 0, -90)}deg)`;}
);

HSEL.register(0, [0.61, 0.67], true,
    ()=>{
        rbcon.style.transform = "rotateZ(0deg)";
    },
    ()=>{
        rbcon.style.transform = "rotateZ(-90deg)";
    },
    (percent)=>{
        rbcon.style.transform = `rotateZ(${HSEL.countAP(percent, 0, -90)}deg)`;
    }
);

HSEL.register(0, [0.57, 0.63], true,
    ()=>{
        bodyLine[3].style.transform = "rotateZ(0deg)";
    },
    ()=>{
        bodyLine[3].style.transform = "rotateZ(90deg)";
    },
    (percent)=>{
        bodyLine[3].style.transform = `rotateZ(${HSEL.countAP(percent, 0, 90)}deg)`;
    }
);

HSEL.register(0, [0.67, 0.75], true,
    ()=>{
        // linecon.style.transform = "translateY(0%)";
        linecon.style.top = "0px";
        homeline.style.top = "0px";
    },
    ()=>{
        // linecon.style.transform = "translateY(-50%)";
        linecon.style.top = `${-wh}px`;
        homeline.style.top = `${-wh}px`;
    },
    (percent)=>{
        // linecon.style.transform = `translateY(${HSEL.countAP(percent, 0, -50)}%)`;
        linecon.style.top = `${HSEL.countAP(percent, 0, -wh)}px`;
        homeline.style.top = `${HSEL.countAP(percent, 0, -wh)}px`;

    }
);

HSEL.register(0, [0.7], false,
    ()=>{

    },
    ()=>{
        for (let l = 0; l < bsvg.length; l++) {
            const elem = bsvg[l];
            elem.classList.add("hidden");
        }
    }
);

HSEL.register(0, [0.73], false,
    ()=>{
        body.classList.remove("toLeft");
    },
    ()=>{
        body.classList.add("toLeft");
    }
);

HSEL.register(0, [0.76], false,
    ()=>{
        body.classList.remove("expand");
    },
    ()=>{
        body.classList.add("expand");
    }
);

// MAINPRES ANIMATION
// HSEL.register(1, [0, 1], true, ()=>{}, ()=>{}, (per)=>{console.log(per)});

const progressBar = document.getElementById("progressBar");
const mainpres = document.getElementById("mainpres");

HSEL.register(1, [0.1, 1, 0.5], false,
    ()=>{
        mainpres.classList.remove("visible");
    },
    ()=>{
        mainpres.classList.add("visible");
    }
);


HSEL.register(1, [0.1, 0.85], true,
    ()=>{
        progressBar.style.height = "0px";
    },
    ()=>{
        progressBar.style.height = `${wh}px`;
    },
    (percent)=>{
        progressBar.style.height = `${HSEL.countAP(percent, 0, wh)}px`;
    }
);

HSEL.register(1, [0.21], false,
    ()=>{
        mainpres.classList.remove("red");
    },
    ()=>{
        mainpres.classList.add("red");
    }
);


HSEL.register(1, [0.61], false,
    ()=>{
        mainpres.classList.remove("blue");
    },
    ()=>{
        mainpres.classList.add("blue");
    }
);

HSEL.register(1, [0.95, 0, 0.9], false,
    ()=>{
        mainpres.classList.remove("finalize");
        mainpres.classList.add("visible");
    },
    ()=>{
        mainpres.classList.add("finalize");
        mainpres.classList.remove("visible");
    }
);

// Contact animation
const contact = document.getElementById("contact");
HSEL.register(2, [0.2], false,
    ()=>{
        contact.classList.remove("visible");
    },
    ()=>{
        contact.classList.add("visible");
    }
);