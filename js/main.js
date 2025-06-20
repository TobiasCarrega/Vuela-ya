<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vuela Ya</title>
  <link rel="stylesheet" href="../estilos/main.css" />
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

  <!-- HERO -->
  <section class="hero">
    <h1>VUELA YA</h1>
    <div class="search-box">
       <label><span>Origen</span>

  <select id="origen">
    <option value="">Selecciona una ciudad</option>
    <option value="bariloche">Bariloche</option>
    <option value="buenos_aires">Buenos Aires</option>
    <option value="córdoba">Córdoba</option>
    <option value="calafate">Calafate</option>
    <option value="iguazú">Iguazú</option>
    <option value="jujuy">Jujuy</option>
    <option value="la_rioja">La Rioja</option>
    <option value="neuquén">Neuquén</option>
    <option value="puerto_madryn">Puerto Madryn</option>
    <option value="rio_gallegos">Rio Gallegos</option>
    <option value="san_martín_de_los_andes">San Martín de los Andes</option>
    <option value="salta">Salta</option>
    <option value="san juan">San Juan</option>
    <option value="usuahia">Usuahia</option>
  </select>
</label>

<label><span>Destino</span>
  <select id="destino">
    <option value="">Selecciona un destino</option>
    <option value="bariloche">Bariloche</option>
    <option value="buenos_aires">Buenos Aires</option>
    <option value="córdoba">Córdoba</option>
    <option value="calafate">Calafate</option>
    <option value="iguazú">Iguazú</option>
    <option value="jujuy">Jujuy</option>
    <option value="la_rioja">La Rioja</option>
    <option value="neuquén">Neuquén</option>
    <option value="puerto_madryn">Puerto Madryn</option>
    <option value="rio_gallegos">Rio Gallegos</option>
    <option value="san_martín_de_los_andes">San Martín de los Andes</option>
    <option value="salta">Salta</option>
    <option value="san juan">San Juan</option>
    <option value="usuahia">Usuahia</option>
  </select>
</label>

      <label><span>Partida</span><input type="date" id="partida" /></label>
      <label><span>Regreso</span><input type="date" id="regreso" /></label>
      
      
  <select id="pasajeros">
    <option value="">Seleccioná cantidad</option>
    <option value="1">1 pasajero</option>
    <option value="2">2 pasajeros</option>
    <option value="3">3 pasajeros</option>
    <option value="4">4 pasajeros</option>
    <option value="5">5 pasajeros</option>
    <option value="6">6 pasajeros</option>
    <option value="7">7 pasajeros</option>
    <option value="8">8 pasajeros</option>
    <option value="9">9 pasajeros</option>
    <option value="10">10 pasajeros</option>
  </select>

</label>

      <button id="buscar">Buscar</button>

    </div>
  </section>

  <!-- PROMOCIONES -->
  <section class="promos">
    <h2>Promociones</h2>
    <div class="card-grid">
      <a href="../html/checkout.html"><div class="card"><img src="../media/aconcagua.png" alt=""><h4>Tracking Aconcagua</h4><p>$550.000<br>2 personas / 5 noches</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/cataratas.png" alt=""><h4>Cataratas de Iguazú</h4><p>$800.000<br>2 personas / 7 noches</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/patagonia.png" alt=""><h4>Caza Patagonia</h4><p>$600.000<br>2 personas / 4 noches</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/perito_moreno.png" alt=""><h4>Glaciar Perito Moreno</h4><p>$900.000<br>2 personas / 7 noches</p></div></a>
    </div>
  </section>

  <!-- VIAJES FRECUENTES -->
  <section class="viajes">
    <h2>Viajes Frecuentes</h2>
    <div class="card-grid">
      <a href="../html/checkout.html"><div class="card"><img src="../media/bariloche.png" alt=""><h4>San Carlos de Bariloche</h4><p>$450.000</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/Buenos_Aires.png" alt=""><h4>Buenos Aires Capital</h4><p>$310.000</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/Cordoba.png" alt=""><h4>Córdoba</h4><p>$300.000</p></div></a>
      <a href="../html/checkout.html"><div class="card"><img src="../media/usuahia.png" alt=""><h4>Ushuaia</h4><p>$700.000</p></div></a>
    </div>
  </section>

  <!-- botones fijos de iniciar sesión y registrarse -->
  <div class="b_fijos">
    <a href="Registro.html"><button class="Login">Registrarse</button></a>
    <a href="login.html"><button class="Login">Inicia sesion</button></a>
  </div>
  

  <!-- FOOTER -->
  <footer>
    <div class="info">
      <h4>Soporte</h4>
      <ul>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Política de seguridad</a></li>
        <li><a href="#">Trabajá con nosotros</a></li>
        <li><a href="#">Misión, visión y valores</a></li>
      </ul>
    </div>
    <div class="social">
      <a><img src="../media/logo_face.svg" alt=""></a>
      <a><img src="../media/google-seeklogo.svg" alt=""></a>
      <a><img src="../media/instagram-seeklogo.png" alt=""></a>
      <a><img src="../media/twitter-x-seeklogo.png" alt=""></a>
    </div>
  </footer>

<!-- CÓDIGO JAVA SCRIPT PROVENIENTE DE LA PÁGINA PRINCIPAL -->
<script>

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

</script>

</body>
</html>






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

