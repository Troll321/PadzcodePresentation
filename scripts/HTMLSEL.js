var pageWrappperHeight, additional = [], scrollSpeed = [], toMin = [],
pageWrapper, pages, pageWrapperIds = [], supposed = 0;
const registerArr = [];

function setPageWrapperDimension() {
    for (let l = 0; l < pages.length; l++) {
        const page = pages[l];
        const { style } = document.getElementById(page.classList[0]);
        style.width = window.innerWidth;
        style.height = (page.scrollHeight + (isNaN(additional[l]) ? 0 : additional[l])) + "px";
    }
}

function getPageWrapperHeight() {
    const heightArr = [];
    for (let l = 0; l < pageWrapper.length; l++) {
        const element = pageWrapper[l];
        heightArr.push(parseInt(getComputedStyle(element).height));
    }
    return heightArr;
}

function animate(pageWrapperIdx, bound, interpolate, base, end, mid) {
    const {top, height} = pageWrapper[pageWrapperIdx].getBoundingClientRect();
    const percent = (-top / height);

    if(interpolate) {
        if (percent <= bound[0]) {
            base();
        } else  if (percent >= bound[1]) {
            end();
        } else {
            mid((percent - bound[0]) / (bound[1] - bound[0]));
        }
    } else {
        if (bound.length >= 3 && !isNaN(bound[1]) && !isNaN(bound[2])) {
            if(bound[1]) {
                if (percent >= bound[2]) {
                    return ;
                }
            } else {
                if (percent <= bound[2]) {
                    return ;
                }
            }
        }
        if (percent <= bound[0]) {
            base();
        } else {
            end();
        }
    }
}

function loop() {
    if(pageWrapper.length != supposed || pages.length != supposed) {
        throw "Dont delete .page nor .pageWrapper"
    }
    
    for (let l = 0; l < pages.length; l++) {
        if (pages[l].classList.contains("active")) {
            for (let i = 0; i < registerArr[l].length; i++) {
                animate(...registerArr[l][i]);
            }
        }        
    }

    requestAnimationFrame(loop);
}

export function update(addition, scrollS, toMi) {
    if (addition && Array.isArray(addition)) {
        additional = addition.slice(0, pageWrapper.length);
    }
    if (scrollS && Array.isArray(scrollS)) {
        scrollSpeed = scrollS.slice(0, pageWrapper.length);
    }
    if (toMi && Array.isArray(toMi)) {
        toMin = toMi.slice(0, pageWrapper.length);
    }

    setPageWrapperDimension();
    pageWrappperHeight = getPageWrapperHeight();
}

export function init(addition, scrollS, toMi) {
    const styelm = document.createElement("style");
    styelm.innerHTML = `
    /* HSEL MANDATORY STYLES */

    body, html {
        position: relative;
    }

    .page {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        visibility: hidden;
        margin: 0;
        padding: 0;
    }

    .page.active {
        visibility: visible;
    }

    .page:not(.active) * {
        animation-play-state: paused;
        display: none;
    }

    .pageWrapper {
        position: relative;
        width: 100%;
        background-color: transparent;
        margin: 0;
        padding: 0;
    }
    `

    pageWrapper = document.getElementsByClassName("pageWrapper");
    pages = document.getElementsByClassName("page");

    if (pageWrapper.length != pages.length) {
        throw "Page Wrapper and Page length is not the same.\nMake sure every Page Wrapper has exatcly ONE page child";
    }

    supposed = pages.length;

    if (addition && Array.isArray(addition)) {
        additional = addition.slice(0, pageWrapper.length);
    }
    if (scrollS && Array.isArray(scrollS)) {
        scrollSpeed = scrollS.slice(0, pageWrapper.length);
    }
    if (toMi && Array.isArray(toMi)) {
        toMin = toMi.slice(0, pageWrapper.length);
    }

    for (let l = 0; l < pages.length; l++) {
        const page = pages[l];
        page.classList = l + " " + page.classList;
        pageWrapperIds.push(l);
        registerArr.push([]);
    }

    for (let l = 0; l < pageWrapper.length; l++) {
        const pageW = pageWrapper[l];
        pageW.style.zIndex = pageWrapper.length - l;
        pageW.id = l;
    }

    setPageWrapperDimension();
    pageWrappperHeight = getPageWrapperHeight();


    // BOUNDARY


    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const {target} = entry;
            const page = document.getElementsByClassName(target.id)[0];
            if (entry.isIntersecting) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }, {
        root: null,
        threshold: 0
    });

    for (let l = 0; l < pageWrapper.length; l++) {
        scrollObserver.observe(pageWrapper[l]);
    }

    window.addEventListener("load", ()=>{
        requestAnimationFrame(() => {
            document.body.appendChild(styelm);
            update();
        });

        // var savedScroll = window.scrollY;
        // var activatePage;
        // for (let l = 0; l < pageWrappperHeight.length; l++) {
        //     const height = pageWrappperHeight[l];
        //     savedScroll -= height;
        //     if (savedScroll <= 0) {
        //         activatePage = l;
        //         break ;
        //     }
        // }

        // pages[activatePage].classList.add("active");

        // if(savedScroll) {
        //     window.scrollTo(0, savedScroll);
        // } else {
        //     window.scrollTo(0,0);
        // }
    })

    window.addEventListener("scroll", ()=>{
        const activePages = document.getElementsByClassName("active");
        // Handle Smooth Scrolling
        for (let l = 0; l < activePages.length; l++) {
            const page = activePages[l];
            const pageIndex = parseInt(page.classList[0]);

            var _scroll = 0;
            for (let i = 0; i < pageIndex; i++) {
                _scroll += pageWrappperHeight[i];
            }
            var scrolled = window.scrollY - _scroll;
            
            if (scrolled < 0) {
                scrolled = 0;
            }

            scrolled = scrolled / (page.scrollHeight + (scrollSpeed[pageIndex] ? scrollSpeed[pageIndex] : 0)) * page.scrollHeight;
            scrolled -= (toMin[pageIndex] ? toMin[pageIndex] : 0);

            if (scrolled < 0) {
                scrolled = 0;
            }

            page.scrollTop = scrolled;
        }
    });

    requestAnimationFrame(loop);
}

export function countAP(AP, base, end) {
    const res = (AP * (end - base)) + base;
    if(res >= Math.max(base, end)) {
        return Math.max(base, end);
    }

    if (res <= Math.min(base, end)) {
        return Math.min(base, end);
    }

    return res;
}

export function register(pageWrapperIdx, bound, interpolate, base, end, mid) {
    if (isNaN(pageWrapperIdx) || pageWrapperIdx < 0 || pageWrapperIdx >= pageWrapper.length) {
        return ;
    }

    if (!Array.isArray(bound)) {
        throw new TypeError("Bound is not an array");
    }

    if (typeof base !== "function") {
        throw new TypeError("base is not a function");
    }

    if (typeof end !== "function") {
        throw new TypeError("end is not a function");
    }

    if (interpolate && typeof mid !== "function") {
        throw new TypeError("mid is not a function");
    }

    registerArr[pageWrapperIdx].push([pageWrapperIdx, bound, interpolate, base, end, mid]);
}

export function test() {
    console.log("Success Running HSEL!", additional);
}