import { showScene } from "./utils/utils.js";   

const botonRegistro = document.getElementById('botonRegistro');
const botonIniciarSesion = document.getElementById('botonIniciarSesion');
const botonCerrarSesion = document.getElementById('botonCerrarSesion');
const enlaceInicioSesion = document.getElementById('enlaceInicioSesion');
const enlaceRegistro = document.getElementById('enlaceRegistro');

showScene('formularioRegistro');

botonIniciarSesion.addEventListener('click', () => showScene('formularioPanelDeUsuario'));
botonRegistro.addEventListener('click', () => showScene('formularioIniciarSesion'));
botonCerrarSesion.addEventListener('click', () => showScene('formularioIniciarSesion'));
enlaceInicioSesion.addEventListener('click', () => showScene('formularioIniciarSesion'));
enlaceRegistro.addEventListener('click', () => showScene('formularioRegistro'));




