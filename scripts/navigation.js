const navButton = document.getElementById("navButton");
const mobileNav = document.getElementById("mobileNav");
const navButtonIsi = document.getElementsByClassName("navButtonIsi");
navButton.addEventListener("click", ()=>{
    mobileNav.classList.toggle("visible");
})

window.addEventListener("click", (e)=>{
    if(e.target !== mobileNav && e.target !== navButton && e.target !== navButtonIsi[0] && e.target !== navButtonIsi[1] && e.target !== navButtonIsi[2] && 
        e.target !== document.getElementById("sliderInput") && e.target !== document.getElementsByClassName("innerContainer")[0]) {
        mobileNav.classList.remove("visible");
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