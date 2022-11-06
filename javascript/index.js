const modalDesafios = document.querySelector(".modalDesafios");
const mainToggler = document.querySelector('.mainContainer');

modalDesafios.addEventListener(('click'), (e) => {

    e.preventDefault();
    mainToggler.style.display = 'flex';
    mainToggler.style.transform = 'translate(33%, 12%)';
})

