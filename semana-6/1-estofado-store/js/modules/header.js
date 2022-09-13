export default function header() {
  const navActionMenu = document.getElementById('navActionMenu');
  const navActionClose = document.getElementById('navActionClose');

  const openMenu = () => {
    const nav = document.querySelector('.nav');
    nav.classList.add('nav--open');
  };
  
  const closeMenu = () => {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav--open');
  };

  navActionMenu.addEventListener('click', openMenu)
  navActionClose.addEventListener('click', closeMenu)
}