var random_num;
let random_text;
let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    random_num= Math.floor(Math.random()*(399999-10000) + +10000);
    document.getElementById('output').innerHTML = `[ ${random_num} ]`;
})


// let copynum = document.getElementById('CopyNumbers');
// copynum.addEventListener('click', () => {
//     let copytext = random_num
//     navigator.clipboard.writeText(copytext.value);
//     alert("Copied the text: " + random_num);
// })
    
let openWeb = document.getElementById('openweb');
openWeb.addEventListener('click', () => {
window.open("https://nhentai.net/g/" + random_num +'/')
})