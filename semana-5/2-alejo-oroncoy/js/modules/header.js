export default function header() {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  document.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    nav.classList.toggle('nav--scroll', scrollY > 0);
  });
}