let enlaceInicio = document.getElementById('iconoCasa');
enlaceInicio.addEventListener('click', () => {
  enlace = "./home.html";
  window.open(enlace, '_self')
})

let enlaceProductos = document.getElementById('iconoProductos');
enlaceProductos.addEventListener('click', () => {
  enlace = "./Sub-pages/page-registros/registros.html";
  window.open(enlace, '_self')
})

let enlaceAgregar = document.getElementById('iconoAgregar');
enlaceAgregar.addEventListener('click', () => {
  enlace = "./Sub-pages/page-agregar/agregar.html";
  window.open(enlace, '_self')
})

let enlaceAyuda = document.getElementById('iconoAyuda');
enlaceAyuda.addEventListener('click', () => {
  enlace = "./Sub-pages/page-ayuda/ayuda.html";
  window.open(enlace, '_self')
})

let enlaceSalir = document.getElementById('iconoSalir');
enlaceSalir.addEventListener('click', () => {
  enlace = "/index.html";
  window.open(enlace, '_self')
})
