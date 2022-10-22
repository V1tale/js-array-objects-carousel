const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const mainPicture = document.getElementById("main-picture");
const bottom = document.querySelector(".bottom");
for (let i = 0; i < images.length; i++) {
    let thisPicture = images[i];
    console.log(thisPicture.image, thisPicture.title, thisPicture.text);
    mainPicture.innerHTML += `<div class="picture hidden"><img src="${thisPicture.image}"><h2>${thisPicture.title}</h2><p>${thisPicture.text}</p></div>`;
    let thisThumb = images[i];
    bottom.innerHTML += `<div class="thumb dark"><img src="${thisThumb.image}"></div>`;
}
let picture = document.getElementsByClassName("picture");
let thumb = document.getElementsByClassName("thumb");
let buttons = document.querySelector(".buttons");
const backward = document.getElementById("backward");
let selected = 0;
picture[selected].classList.remove("hidden");
thumb[selected].classList.remove("dark");
console.log(picture);
const forward = document.getElementById("forward");
forward.addEventListener("click", function() {
    if (selected < (picture.length -1 )) {
        picture[selected].classList.add("hidden");
        thumb[selected].classList.add("dark");
        selected++;
        picture[selected].classList.remove("hidden");
        thumb[selected].classList.remove("dark");
    }
       else if (selected === (picture.length -1)) {     
          picture[selected].classList.add("hidden");
          thumb[selected].classList.add("dark");
          selected = 0;
          picture[selected].classList.remove("hidden");
          thumb[selected].classList.remove("dark");
        }
})
backward.addEventListener("click", function() {
    if (selected > 0 ) {
        picture[selected].classList.add("hidden");
        thumb[selected].classList.add("dark")
        selected--;
        thumb[selected].classList.remove("dark");
        picture[selected].classList.remove("hidden");
     }
     else if (selected === 0) {     
       picture[selected].classList.add("hidden");
       thumb[selected].classList.add("dark");
       selected = (picture.length -1);
       thumb[selected].classList.remove("dark");
       picture[selected].classList.remove("hidden");
    }
})