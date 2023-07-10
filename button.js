const button = document.querySelector('button');
const link = document.querySelector('a');
let active = false;
console.log(button);

link.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.ctrlKey){
        button.classList.add('PadzcodeText');
        button.style.top = "";
        button.style.left = "";
        setTimeout(() => button.classList.add('expand'), 500);
        setTimeout(() => {
            window.location.href = "https://static.zerochan.net/Miyama.Suzune.full.3263412.jpg";
        }, 1000);
    }
    else{
        button.style.top = `${10 + (Math.random() * 80)}%`;
        button.style.left = `${10 + (Math.random() * 80)}%`;
    }
});