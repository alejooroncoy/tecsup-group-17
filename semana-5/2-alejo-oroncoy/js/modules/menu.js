export default function menu() {
  const buttonMenu = document.getElementById('buttonMenu');
  const menuHeader = document.getElementById('menuHeader');

  const openMenu = () => {
    const isOpen = menuHeader.classList.toggle('menu--header-open');

    buttonMenu.classList.add('nav__action--menu-up');
    
    const removeClassUp = () => buttonMenu.classList.remove('nav__action--menu-up');
    
    buttonMenu.addEventListener('animationend', removeClassUp)

    buttonMenu.innerHTML = isOpen ? '<i class="bi bi-x-circle"></i></i>' : '<i class="bi bi-list"></i>';
  };

  buttonMenu.addEventListener('click', openMenu);
}