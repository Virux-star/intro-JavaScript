const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const botonMas = document.querySelector(".boton-mas");
const botonMenos = document.querySelector(".boton-menos");

let cantidad = 0;

precioSpan.textContent = precio;
cantidadSpan.textContent = cantidad;
totalSpan.textContent = precio * cantidad;

botonMas.addEventListener("click", () => {
	cantidad += 1;
	cantidadSpan.textContent = cantidad;
	totalSpan.textContent = precio * cantidad;
});

botonMenos.addEventListener("click", () => {
	if (cantidad > 0) {
		cantidad -= 1;
		cantidadSpan.textContent = cantidad;
		totalSpan.textContent = precio * cantidad;
	}
});