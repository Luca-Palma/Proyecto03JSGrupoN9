//almacenamiento y lógica de datos

let mascotas = [];

/**
 * Agrega una nueva mascota al arreglo
 */
function agregarMascota(mascota) {
  mascota.id = Date.now(); // ID unico
  mascotas.push(mascota);
}

/**
 * Retorna todas las mascotas
 */
function obtenerMascotas() {
  return mascotas;
}

function eliminarMascota(id) {
  const index = mascotas.findIndex(m => m.id === id);

  if (index !== -1) {
    mascotas.splice(index, 1);
    mostrarMascotas();
  }
}

/**
 * Devuelve estadísticas (totales, vacunadas y no vacunadas)
 */
function obtenerResumen() {
  let total = mascotas.length;
  let vacunadas = mascotas.filter(m => m.vacunada).length;
  let noVacunadas = total - vacunadas;

  return { total, vacunadas, noVacunadas };
}