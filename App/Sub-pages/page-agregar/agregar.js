let enlaceInicio = document.getElementById('iconoCasa');
enlaceInicio.addEventListener('click', () => {
    enlace = "/App/home.html";
    window.open(enlace, '_self')
})

let enlaceProductos = document.getElementById('iconoProductos');
enlaceProductos.addEventListener('click', () => {
    enlace = "/App/Sub-pages/page-registros/registros.html";
    window.open(enlace, '_self')
})

let enlaceAgregar = document.getElementById('iconoAgregar');
enlaceAgregar.addEventListener('click', () => {
    enlace = "/App/Sub-pages/page-agregar/agregar.html";
    window.open(enlace, '_self')
})

let enlaceAyuda = document.getElementById('iconoAyuda');
enlaceAyuda.addEventListener('click', () => {
    enlace = "/App/Sub-pages/page-ayuda/ayuda.html";
    window.open(enlace, '_self')
})

let enlaceSalir = document.getElementById('iconoSalir');
enlaceSalir.addEventListener('click', () => {
    enlace = "/index.html";
    window.open(enlace, '_self')
})


// Escuchar el evento submit del formulario
document.getElementById('productform').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  // Obtener los valores del formulario
  let productName = document.getElementById('product-name').value;
  let productQuantity = document.getElementById('product-quantity').value;
  let productPrice = document.getElementById('product-price').value;

  // Crear un objeto con los datos del producto
  let product = {
      name: productName,
      quantity: productQuantity,
      price: productPrice
  };

  // Obtener productos actuales de localStorage o inicializar un arreglo vacío
  let products = JSON.parse(localStorage.getItem('products')) || [];

  // Agregar el nuevo producto al arreglo
  products.push(product);

  // Guardar el arreglo actualizado en localStorage
  localStorage.setItem('products', JSON.stringify(products));

  // Limpiar el formulario
  document.getElementById('productform').reset();

  // Redireccionar a la página de registros
  window.location.href = '../page-registros/registros.html';
});
