const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]



const containerImages = document.querySelector('.slider  .img-container');
const containerController = document.querySelector('.img-slide');
const containerTitle = document.querySelector('.caption .title');
const containerText = document.querySelector('.caption .subtitle');
//const containerDots = document.querySelector('.slider  .list');

//girato sull-array delle immagini
for (let index = 0; index < items.length; index++) {
    let image = `<img src="${items[index]}" alt="">`;
    let titleGroup = `<h1>${title[index]}</h1>`;
    let textGroup = `<h2>${text[index]}</h2>`;
    //let dot = `<div class="list-item"></div>`;

    // if (index == 0) {
    //   image = `<img class="first active" src="${images[index]}" alt="">`;
    // }
    // else if (index == images.length - 1) {
    //   image = `<img class="last" src="${images[index]}" alt="">`;
    // }

    containerImages.innerHTML += image;
    containerController.innerHTML += image;
    containerTitle.innerHTML += titleGroup;
    containerText.innerHTML += textGroup;
  //  containerDots.innerHTML += dot;
}



const imagesDom = document.querySelectorAll('.img-container img');
console.log(imagesDom);

const slideDom = document.querySelectorAll('.img-slide img');

const titleDom = document.querySelectorAll('.caption .title');
const textDom = document.querySelectorAll('.caption .subtitle');

//preso elemento 0
imagesDom[0].classList.add('first', 'active');
slideDom[0].classList.add('first', 'preview');
titleDom[0].classList.add('active');
textDom[0].classList.add('active');

//preso elemento ultimo
imagesDom[imagesDom.length - 1].classList.add('last');
slideDom[slideDom.length - 1].classList.add('last');
titleDom[titleDom.length - 1].classList.add('last');
textDom[textDom.length - 1].classList.add('last');


//Consegna:
//Dati tre array contenenti:
//-una lista ordinata di 5 immagini,
//-una lista ordinata dei relativi 5 luoghi e
//- una lista di 5 news,
//creare un carosello come nella foto allegata.

//MILESTONE 1

//Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails 
//sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

//MILESTONE 2

//Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo
//for che concatena un template literal.Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

//MILESTONE 3

//Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo 
//in basso a destra dovranno essere aggiunti i relativi:
//- titolo e
//- testo.
//Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

//    BONUS:

//Aggiungere il ciclo infinito del carosello.Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto,
// la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.