let enlaceInicio = document.getElementById('iconoCasa');
enlaceInicio.addEventListener('click', () => {
    enlace = "/App/home.html";
    window.open(enlace, '_self')
})

let enlaceProductos = document.getElementById('iconoProductos');
enlaceProductos.addEventListener('click', () => {
    enlace = "../page-registros/registros.html";
    window.open(enlace, '_self')
})

let enlaceAgregar = document.getElementById('iconoAgregar');
enlaceAgregar.addEventListener('click', () => {
    enlace = "../page-agregar/agregar.html";
    window.open(enlace, '_self')
})

let enlaceAyuda = document.getElementById('iconoAyuda');
enlaceAyuda.addEventListener('click', () => {
    enlace = "../page-ayuda/ayuda.html";
    window.open(enlace, '_self')
})

let enlaceSalir = document.getElementById('iconoSalir');
enlaceSalir.addEventListener('click', () => {
    enlace = "/index.html";
    window.open(enlace, '_self')
})


document.addEventListener('DOMContentLoaded', function() {
  // Obtener los productos guardados en localStorage
  let products = JSON.parse(localStorage.getItem('products')) || [];

  // Mostrar los productos en la página
  let productsContainer = document.getElementById('products-container');

  products.forEach(function(product) {
      let productCard = document.createElement('div');
      productCard.classList.add('product-card');
      
      let productName = document.createElement('h3');
      productName.textContent = product.name;

      let productQuantity = document.createElement('p');
      productQuantity.textContent = `Cantidad: ${product.quantity}`;

      let productPrice = document.createElement('p');
      productPrice.textContent = `Precio por Unidad: $${product.price}`;

      productCard.appendChild(productName);
      productCard.appendChild(productQuantity);
      productCard.appendChild(productPrice);

      productsContainer.appendChild(productCard);
  });
});
