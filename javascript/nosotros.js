
// GENERALES 

const modalContainerBgPato = document.querySelector('.modalContainerBgPato');
const cerrarModal = document.querySelector('.closePato');

// PATO 


const patoAbrir = document.querySelector('.patoJs');
const modalPato = document.querySelector ('.modalPato');



patoAbrir.addEventListener (('click'), (e) =>{

    e.preventDefault();
    modalContainerBgPato.style.opacity = '1';
    modalContainerBgPato.style.visibility = 'visible';
    modalPato.classList.toggle ('modalClosePato');
})

cerrarModal.addEventListener (('click') , () => {

    modalPato.classList.toggle ('modalClosePato')

    setTimeout(() => {
                modalContainerBgPato.style.opacity = '0'
            modalContainerBgPato.style.visibility = 'hidden'
            }, 650);
        

})

window.addEventListener (('click') , (e) => {


    if (e.target == modalContainerBgPato) {

        modalPato.classList.toggle('modalClosePato');

    setTimeout(() => {
        modalContainerBgPato.style.opacity = '0'
    modalContainerBgPato.style.visibility = 'hidden'
    }, 650);
    }

})


// RORO 


const modalContainerBgRoro = document.querySelector('.modalContainerBgRoro');
const cerrarRoro = document.querySelector('.closeRoro');

const roroAbrir = document.querySelector ('.roroJs');
const modalRoro = document.querySelector ('.modalRoro');

roroAbrir.addEventListener (('click'), (e) =>{

    e.preventDefault()
    modalContainerBgRoro.style.opacity = "1";
    modalContainerBgRoro.style.visibility = "visible";
    modalRoro.classList.toggle ('modalCloseRoro');

})

cerrarRoro.addEventListener (('click'), () =>{
    modalRoro.classList.toggle ('modalCloseRoro');
    
    setTimeout(() => {
        modalContainerBgRoro.style.opacity = "0";
        modalContainerBgRoro.style.visibility = "visible";

    }, 650);
})

window.addEventListener (('click') , (e) => {


    if (e.target == modalContainerBgRoro) {

        modalRoro.classList.toggle('modalCloseRoro');

    setTimeout(() => {
        modalContainerBgRoro.style.opacity = '0'
    modalContainerBgRoro.style.visibility = 'hidden'
    }, 650);
    }

})


// TINY 

const modalContainerBgTiny = document.querySelector('.modalContainerBgTiny');
const cerrarTiny = document.querySelector('.closeTiny');

const tinyAbrir = document.querySelector ('.tinyJs');
const modalTiny= document.querySelector ('.modalTiny');

tinyAbrir.addEventListener (('click'), (e) =>{

    e.preventDefault()
    modalContainerBgTiny.style.opacity = "1";
    modalContainerBgTiny.style.visibility = "visible";
    modalTiny.classList.toggle ('modalCloseTiny');

})

cerrarTiny.addEventListener (('click'), () =>{
    modalTiny.classList.toggle ('modalCloseTiny');
    
    setTimeout(() => {
        modalContainerBgTiny.style.opacity = "0";
        modalContainerBgTiny.style.visibility = "visible";

    }, 650);
})

window.addEventListener (('click') , (e) => {


    if (e.target == modalContainerBgTiny) {

        modalTiny.classList.toggle('modalCloseTiny');

    setTimeout(() => {
        modalContainerBgTiny.style.opacity = '0'
    modalContainerBgTiny.style.visibility = 'hidden'
    }, 650);
    }

})

// CAROLA 

const modalContainerBgCarola = document.querySelector('.modalContainerBgCarola');
const cerrarCarola = document.querySelector('.closeCarola');

const carolaAbrir = document.querySelector ('.carolaJs');
const modalCarola= document.querySelector ('.modalCarola');

carolaAbrir.addEventListener (('click'), (e) =>{

    e.preventDefault()
    modalContainerBgCarola.style.opacity = "1";
    modalContainerBgCarola.style.visibility = "visible";
    modalCarola.classList.toggle ('modalCloseCarola');

})

cerrarCarola.addEventListener (('click'), () =>{
    modalCarola.classList.toggle ('modalCloseCarola');
    
    setTimeout(() => {
        modalContainerBgCarola.style.opacity = "0";
        modalContainerBgCarola.style.visibility = "visible";

    }, 650);
})

window.addEventListener (('click') , (e) => {


    if (e.target == modalContainerBgCarola) {

        modalCarola.classList.toggle('modalCloseCarola');

    setTimeout(() => {
        modalContainerBgCarola.style.opacity = '0'
    modalContainerBgCarola.style.visibility = 'hidden'
    }, 650);
    }

})


    // MARTIN 

    const modalContainerBgMartin = document.querySelector('.modalContainerBgMartin');
const cerrarMartin = document.querySelector('.closeMartin');

const martinAbrir = document.querySelector ('.martinJs');
const modalMartin= document.querySelector ('.modalMartin');

martinAbrir.addEventListener (('click'), (e) =>{

    e.preventDefault()
    modalContainerBgMartin.style.opacity = "1";
    modalContainerBgMartin.style.visibility = "visible";
    modalMartin.classList.toggle ('modalCloseMartin');

})

cerrarMartin.addEventListener (('click'), () =>{
    modalMartin.classList.toggle ('modalCloseMartin');
    
    setTimeout(() => {
        modalContainerBgMartin.style.opacity = "0";
        modalContainerBgMartin.style.visibility = "visible";

    }, 650);
})

window.addEventListener (('click') , (e) => {


    if (e.target == modalContainerBgMartin) {

        modalMartin.classList.toggle('modalCloseMartin');

    setTimeout(() => {
        modalContainerBgMartin.style.opacity = '0'
    modalContainerBgMartin.style.visibility = 'hidden'
    }, 650);
    }

})










