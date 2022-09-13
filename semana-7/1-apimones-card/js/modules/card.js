export default function card() {
  const pokemonRemote = document.getElementById('pokemonRemote');
  const getPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/25');
    const { sprites, name, id, types, stats } = await res.json();
    const statsWithKey = stats.map(stat => ({
      ...stat,
      key: crypto.randomUUID(),
    }))
    pokemonRemote.insertAdjacentHTML('beforeend', `
    <div class="pokemon__card">
      <header class="pokemon__header">
        <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
      </header>
      <section class="pokemon__body">
        <figure class="pokemon__body-image-container">
          <img src="${sprites.other['official-artwork'].front_default}"
            alt="${name}" class="pokemon__body-image" />
        </figure>
        <h2 class="pokemon__body-id">Id: ${id}</h2>
        <h1 class="pokemon__body-title">
          ${name}
        </h1>
        <p class="pokemon__body-types">${types.map(element => element.type.name).join(', ')}
        </p>
      </section>
      
      <footer class="pokemon__footer">
        ${statsWithKey.map(({ stat, base_stat, key }) => (
          `<div class="pokemon__footer-stats" data-key=${key}>
            <h3 class="pokemon__footer-stats-base">${base_stat}</h3>
            <p class="pokemon__footer-stats-name">${stat.name}</p>
          </div>`
        )).join('\n')}
      </footer>
    </div>`);
  };
  getPokemon();
}