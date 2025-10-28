const modo = document.getElementById("modo");
const body = document.body;

// Función para cambiar entre modo oscuro y claro
function modoOscuro() {
  // Alternar la clase "oscuro" en el body y guardar el estado en localStorage
  const esModoOscuro = body.classList.toggle("oscuro");
  localStorage.setItem("modo", esModoOscuro);

  // Cambiar el ícono según el estado del modo oscuro
  modo.classList.toggle("bi-moon", !esModoOscuro);  // Si está en modo claro, mostrar luna
  modo.classList.toggle("bi-sun", esModoOscuro);   // Si está en modo oscuro, mostrar sol
}

// Verificar el estado de localStorage y aplicar el modo al cargar la página
if (localStorage.getItem("modo") === "true") {
  body.classList.add("oscuro");
  modo.classList.add("bi-sun");
} else {
  modo.classList.add("bi-moon");
}

// Agregar el event listener solo si el ícono existe en la página
if (modo) {
  modo.addEventListener("click", modoOscuro);
}