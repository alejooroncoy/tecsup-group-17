export default function loader() {
  const loader = document.getElementById('loader');
  loader.classList.add('loader--hide');

  setTimeout(() => {
    loader.classList.add('loader--remove');
  }, 1000);
}