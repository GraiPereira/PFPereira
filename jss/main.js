
let usuario = prompt('Ingrese nombre de usuario');
let saludo = document.getElementById('hola');
saludo.innerHTML = `<h1>Hola ${usuario}</h1>`;
console.log(saludo.innerHTML);
