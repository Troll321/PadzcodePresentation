const navButton = document.getElementById("navButton");
const mobileNav = document.getElementById("mobileNav");
const navButtonIsi = document.getElementsByClassName("navButtonIsi");
navButton.addEventListener("click", ()=>{
    mobileNav.classList.toggle("visible");
})

window.addEventListener("click", (e)=>{
    if(e.target !== mobileNav && e.target !== navButton && e.target !== navButtonIsi[0] && e.target !== navButtonIsi[1] && e.target !== navButtonIsi[2] ) {
        mobileNav.classList.remove("visible");
    }
})