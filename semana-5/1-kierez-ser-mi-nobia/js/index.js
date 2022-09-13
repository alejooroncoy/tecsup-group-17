'use strict';

const documentReady = () => {
  const buttonYes = document.querySelector('#heroButtonYes');
  const buttonNo = document.querySelector('#heroButtonNo');
  const nowZomozPartner = () => {
    alert('💖 Ahora somos novios 💖');
    alert('❤ Das luz a mi vida ❤');
    location.href = 'https://www.youtube.com/watch?v=XpPRXTAUw_o';
  };

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