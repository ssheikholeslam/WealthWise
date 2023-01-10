// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Hero demo scroll animation intersection listener
let heroGradientElement;
let heroGlowElement;
let heroImageElement;
let sketchLinesSVG;

window.addEventListener("load", (event) => {
    heroGradientElement = document.querySelector('.hero-gradient');
    heroGlowElement = document.querySelector('.hero-glow');
    heroImageElement = document.querySelector('.hero-image');
    sketchLinesSVG = document.querySelector('.animation__sketch-lines');

    createObserver();
}, false);

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(heroGradientElement);
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.4) {
            heroGradientElement.style.animation = 'animation__rotate-image 1400ms ease forwards';
            heroGlowElement.style.animation = 'animation__image-glow 1400ms 680ms ease forwards'; 
            sketchLinesSVG.style.animation = 'animation__sketch-lines 1200ms ease-out forwards';
            heroImageElement.style.animation = 'animation__image-fade 1400ms 500ms ease-in forwards';
        } 
    });
}
