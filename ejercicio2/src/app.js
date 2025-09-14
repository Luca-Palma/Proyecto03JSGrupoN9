//controla la aplicación

function registrarMascota() {
  const nombre = document.getElementById("nombreMascota").value.trim();
  const tipo = document.getElementById("tipoMascota").value;
  const edad = parseInt(document.getElementById("edadMascota").value);
  const duenio = document.getElementById("duenioMascota").value.trim();
  const vacunada = document.querySelector("input[name='vacunada']:checked");

  if (!nombre || !tipo || isNaN(edad) || !duenio || !vacunada) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  

  const mascota = {
    nombre,
    tipo,
    edad,
    duenio,
    vacunada: vacunada.value === "si"
  };

  agregarMascota(mascota);
  mostrarMascotas();
  limpiarFormulario();
}