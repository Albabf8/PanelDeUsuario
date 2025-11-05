import { showScene } from "./utils/utils.js";   

const botonRegistro = document.getElementById('botonRegistro');
const botonIniciarSesion = document.getElementById('botonIniciarSesion');
const botonCerrarSesion = document.getElementById('botonCerrarSesion');

showScene('formularioRegistro');

botonIniciarSesion.addEventListener('click', () => showScene('formularioPanelDeUsuario'));
botonRegistro.addEventListener('click', () => showScene('formularioIniciarSesion'));
botonCerrarSesion.addEventListener('click', () => showScene('formularioIniciarSesion'));




