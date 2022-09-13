import actionsLocalStorage from '../libs/actionsLocalStorage.js';

export default function header() {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');
  
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', scrollY > 0)
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0)
  }

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open')
  };
  
  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open')
  };

  const toggleTheme = () => {
    const isDark = !document.body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
    actionsLocalStorage('set', 'darkMode', isDark);
  };

  const isDarkMode = actionsLocalStorage('get', 'darkMode');
    if(isDarkMode === true || isDarkMode === null) {
      document.body.classList.remove('body--light');
      headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
    } else {
      document.body.classList.add('body--light');
      headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
    }

  document.addEventListener('scroll', documentScroll);
  headerNavMenuIconContainer.addEventListener('click', openMenu)
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu)
  headerNavMenuLinkList.addEventListener('click', (e) => {
    const { target } = e;
    if(target.nodeName === 'A') return closeMenu();
  })
  headerNavThemeIconContainer.addEventListener('click', toggleTheme);
}