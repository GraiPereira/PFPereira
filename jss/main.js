let usuario = prompt('Ingrese nombre de usuario');
localStorage.setItem("usuario-ingresado", usuario);
let saludo = document.getElementById('hola');
saludo.innerHTML = `<h1>Hola ${usuario}</h1>`;
let usuarioJSON = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJSON);