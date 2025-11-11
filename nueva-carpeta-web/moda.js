
const tendencias = [
  {
    nombre: "Estilo Oversize",
    descripcion: "Prendas sueltas y cómodas dominan la temporada.",
  },
  {
    nombre: "Rosa Pastel",
    descripcion: "El color estrella del año, suave y femenino.",
  },
  {
    nombre: "Denim Vintage",
    descripcion: "Jeans desgastados y chaquetas retro vuelven con fuerza.",
  },
  {
    nombre: "Estampados Florales",
    descripcion: "Flores pequeñas y delicadas para un look romántico.",
  },
];


function cargarTendencias() {
  const contenedor = document.getElementById("tendencias-list");
  contenedor.innerHTML = "";

  tendencias.forEach((t) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${t.nombre}</h3>
      <p>${t.descripcion}</p>
    `;

    contenedor.appendChild(card);
  });
}


function cargarProductosAPI() {
  const productos = [
    { nombre: "Vestido Rosa", precio: "$45" },
    { nombre: "Chaqueta Oversize", precio: "$60" },
    { nombre: "Jeans Vintage", precio: "$40" },
  ];

  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  productos.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>Precio: ${p.precio}</p>
    `;

    contenedor.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", cargarTendencias);
document.getElementById("btn-cargar").addEventListener("click", cargarProductosAPI);
