import {ww} from "./constant.js";

const navButton = document.getElementById("navButton");
const mobileNav = document.getElementById("mobileNav");
navButton.addEventListener("click", ()=>{
    mobileNav.classList.toggle("visible");
    navButton.classList.toggle("visible");
})

window.addEventListener("pointerdown", (e)=>{
    if(e.clientX >= 0.7 * ww) {
        mobileNav.classList.remove("visible");
        navButton.classList.remove("visible");
    }
})

const hashLinks = document.getElementsByClassName("hashLinks");
for (let l = 0; l < hashLinks.length; l++) {
    const hashLink = hashLinks[l];
    hashLink.addEventListener("click", (e)=>{
        e.preventDefault();
        setTimeout(()=>{
            window.scrollBy(0, document.getElementById(e.target.dataset.id).getBoundingClientRect().top);
        }, 0);
        // console.log(document.getElementById(e.target.dataset.id));
    })
}