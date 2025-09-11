//funciones relacionadas con el DOM
function mostrarMascotas() {
  const lista = document.getElementById("listaMascotas");
  const resumen = document.getElementById("resumen");

  lista.innerHTML = "";

  obtenerMascotas().forEach(mascota => {
    const card = document.createElement("div");
    card.className = "mascota-card";

    card.innerHTML = `
      <h3>${mascota.nombre}</h3>
      <p><b>Tipo:</b> ${mascota.tipo}</p>
      <p><b>Edad:</b> ${mascota.edad} años</p>
      <p><b>Dueño:</b> ${mascota.duenio}</p>
      <p><b>Estado:</b> 
        <span class="${mascota.vacunada ? "estado-vacunada" : "estado-no"}">
          ${mascota.vacunada ? "Vacunada" : "No vacunada"}
        </span>
      </p>
      <button class="eliminar" onclick="eliminarMascota(${mascota.id})">Eliminar</button>
    `;

    lista.appendChild(card);
  });

  const { total, vacunadas, noVacunadas } = obtenerResumen();

  resumen.innerHTML = `
    <p><b>Total de mascotas registradas:</b> ${total}</p>
    <p><b>Vacunadas:</b> ${vacunadas}</p>
    <p><b>No vacunadas:</b> ${noVacunadas}</p>
  `;
}
function limpiarFormulario() {
  document.getElementById("nombreMascota").value = "";
  document.getElementById("tipoMascota").value = "";
  document.getElementById("edadMascota").value = "";
  document.getElementById("duenioMascota").value = "";
  document.querySelectorAll("input[name='vacunada']").forEach(r => r.checked = false);
}