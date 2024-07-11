const tombol = document.getElementById('threeBar');
const target = document.getElementById('menu2');

tombol.addEventListener('click', fungsi);

function fungsi(){
    target.classList.toggle('hidden');
}

document.addEventListener('click', (event) => {
    if (!target.contains(event.target) && !tombol.contains(event.target)) 
    {
      target.classList.add('hidden');
    }
    });