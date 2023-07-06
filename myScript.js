const textarea = document.querySelector('#floatingTextarea2');
const total = document.querySelector('.total');
const remain = document.querySelector('.remain');

floatingTextarea2.addEventListener('keydown', () => {
    let count = textarea.value.trim();
    total.lastChild.textContent = count.length;
    remain.lastChild.textContent = 50 - count.length;
})