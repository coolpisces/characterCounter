const textarea = document.querySelector('#floatingTextarea2');
const total = document.querySelector('.total');
const remain = document.querySelector('.remain');

textarea.addEventListener('keydown', () => {
    let count = textarea.value.trim();
    total.lastChild.textContent = count.length;
    remain.lastChild.textContent = textarea.getAttribute('maxlength') - count.length;
})