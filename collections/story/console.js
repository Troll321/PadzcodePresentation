const bek = document.getElementById("button")

function handleclick() {
    bek.classList.toggle("le")
}
function doublehandleclick() {
    bek.classList.toggle("kol")
}

bek.addEventListener("click", handleclick) 

bek.addEventListener("dblclick", doublehandleclick )
//  catatan ada di console.html (jaga jaga yen bingung)

document.getElementsByTagName("button")[0];