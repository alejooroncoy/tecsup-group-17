'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const buttonYes = document.querySelector('#heroButtonYes');
  const buttonNo = document.querySelector('#heroButtonNo');
  const nowZomozPartner = () => {
    alert('💖 Now Zomos ParTnEr💖');
    alert('❤ Das luz a my vida ❤');
    alert('😱 Nuestra boda es mañana 😱');
    location.href = 'https://www.youtube.com/watch?v=am1_JLFDFMw';
  };

  const partner = prompt('🥰 Dime tu Name 🥰');

  heroTitle.innerHTML += ` ${partner || ''} ❤?`
  const vamosEvitarQueSeRompaMiCorazon = (event) => {
    const { target } = event;
    target.style.position = 'absolute'
    target.style.top = `${Math.random() * innerHeight}px`
    target.style.left = `${Math.random() * innerWidth}px`
  }

  buttonNo.addEventListener('mouseover', vamosEvitarQueSeRompaMiCorazon);
  buttonYes.addEventListener('click', nowZomozPartner);
};

document.addEventListener('DOMContentLoaded', documentReady);