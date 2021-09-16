export const registration = () => {

  const templateRegistro = `
      <div> 
      <div class="contenedor-central">
      <h1 class="titulo">ALKEVE RESTAURANT SIDE</h1><br>
      <img class="galeria"src="img/ejemplorestaurantes.jpg" alt="Imagen ejemplo restaurantes"><br><br>
      <p class="texto">Únete a la comunidad de ALKEVE RESTAURANT SITE, la app para crear, compartir y conocer restaurantes en tu ciudad.</p>

      </div> <br>
      <div class="contenedor-form">
      <h1> REGISTRARSE:</h1><br>
      <button id="registro-google" class="registro-google" type="button">Registarse con Google</button><br><br>
      <p>Registrate con tu correo:</p><br>
      <input type="text" class="form" id="nombres" value="" placeholder="Nombre"><br>
      <input type="email" class="form" id="email-registro" value="" placeholder="Email"><br>
      <input type= "password" class="form" id="password-one" value="" placeholder="Password"><br>
      <p>Acepto <a href="#">terminos y condiciones</a></p>
      <button id="btn-resgistrarse" type="button">Crear cuenta</button><br>

      <p>¿Ya estas registrado?</p>
      <button id="botonRetorno" type="button">Registrarse</button><br>
      </div>
      </div>
  `
  /*const divRegistro = document.createElement("div");
  divRegistro.innerHTML = templateRegistro;
  divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
  //console.log()
  return templateRegistro

}

