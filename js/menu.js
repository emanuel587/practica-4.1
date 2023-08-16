let imagenes = document.querySelectorAll('.galeria__img');
let modal = document.querySelector('#modal');
let imagen = document.querySelector('#modal_img');
let descripcion = document.querySelector('#modal_descripcion');
let boton = document.querySelector('#modal_boton');

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function (e) {
    modal.classList.toggle('modal--open');
    let src = e.target.src;
    let alt = e.target.alt;
    imagen.setAttribute('src', src);
    descripcion.textContent = alt;
  });
}

boton.addEventListener('click', function () {
  modal.classList.toggle('modal--open');
});