

let inputNombreUsuario = document.getElementById("nombreUsuario");
let inputPassword = document.getElementById("password");
let inputTelefono = document.getElementById("telefono");
let inputCodigoPostal = document.getElementById("codigoPostal");
let botonRegistro = document.getElementById("botonRegistro");

let regexNombreUsuario = /^[a-zA-Z ]{3,}$/;
let regexPassword = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
let regexTelefono = /^[0-9]{9}$/;
let regexCodigoPostal = /^[0-9]{5}$/;






