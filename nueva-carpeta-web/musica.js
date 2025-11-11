
const generos = [
  { nombre: 'Pop', artistas: ['Dua Lipa', 'Ariana Grande', 'The Weeknd'] },
  { nombre: 'Rock', artistas: ['Queen', 'Imagine Dragons', 'Foo Fighters'] },
  { nombre: 'Reggaeton', artistas: ['Bad Bunny', 'Karol G', 'Feid'] },
  { nombre: 'Electrónica', artistas: ['David Guetta', 'Calvin Harris', 'Zedd'] },
  { nombre: 'K-Pop', artistas: ['BTS', 'BLACKPINK', 'Stray Kids'] }
];


function cargarGeneros() {
  const contenedor = document.getElementById('lista-generos');
  if (!contenedor) return;

  generos.forEach(genero => {
    const div = document.createElement('div');
    div.classList.add('genero-item');

    div.innerHTML = `
      <h3>${genero.nombre}</h3>
      <p>Artistas populares: ${genero.artistas.join(', ')}</p>
    `;

    contenedor.appendChild(div);
  });
}


document.addEventListener('DOMContentLoaded', cargarGeneros);