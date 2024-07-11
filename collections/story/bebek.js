var  Namavariabel =  "Jadi gini" ;
console.log(Namavariabel);
alert(Namavariabel);

// Dua ini namanya Fuction
// yang kuning nama yang biru dalam kurung = parameter

function plus (a, b) {
    return a+b;
}

function Tes() {
    alert("Why you click this");
}

function Result() {
    var val1 = parseInt(document.getElementById("id1").value)
    var val2 = parseInt(document.getElementById("id2").value) 
    alert(val1 * val2)

}



// kalau tidak pakai .value maka nanti dia akan mereturn number dalam bentuk string tanpa diambil nilainya
