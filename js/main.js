
// CÓDIGO JAVA SCRIPT PROVENIENTE DE LA PÁGINA PRINCIPAL
window.onload = function() {
  alert("¡Bienvenido a Vuela Ya! ✈️\nExplorá los mejores destinos y promociones.");

  const boton = document.getElementById("buscar");
  boton.addEventListener("click", function () {
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const pasajeros = document.getElementById("pasajeros").value;
    const fechaPartida = document.getElementById("partida").value;
    const fechaRegreso = document.getElementById("regreso").value;

    if (origen === "" || destino === "") {
      alert("⚠️ Por favor, seleccioná tanto origen como destino.");
      return;
    }

    if (origen === destino) {
      alert("⚠️ El origen y el destino no pueden ser iguales.");
      return;
    }

    if (pasajeros === "") {
      alert("⚠️ Por favor seleccioná la cantidad de pasajeros.");
      return;
    }

    if (fechaPartida === "" || fechaRegreso === "") {
      alert("⚠️ Por favor completá ambas fechas.");
      return;
    }

    if (fechaRegreso < fechaPartida) {
      alert("⚠️ La fecha de regreso no puede ser anterior a la de partida.");
      return;
    }

    alert("✈️ Buscando viaje desde " + origen + " hacia " + destino + " para " + pasajeros + " pasajero(s), desde el " + fechaPartida + " hasta el " + fechaRegreso + "...");
  });
};

