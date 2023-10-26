 // Clase Producto
 class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

// Clase CarritoDeCompra
class CarritoDeCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

// Evento para agregar productos al carrito
const botonesAgregarAlCarrito = document.querySelectorAll('.bg-blue-500');
const carrito = new CarritoDeCompra();

botonesAgregarAlCarrito.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = new Producto(`Producto ${index + 1}`, `Descripción del Producto ${index + 1}`, 10.0);
        carrito.agregarProducto(producto);

        // Actualizar la lista del carrito
        const listaCarrito = document.getElementById('carrito');
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
});

// Evento para realizar una orden de compra
const realizarOrdenButton = document.getElementById('realizarOrden');
realizarOrdenButton.addEventListener('click', () => {
    const total = carrito.calcularTotal();
    alert(`Orden de compra realizada. Total: $${total}`);
});
// Agregar un listener para los botones "Eliminar" en la lista de productos
const removeFromListButtons = document.querySelectorAll('.remove-from-list');

removeFromListButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        // Puedes agregar aquí la lógica para eliminar el producto de la lista
        // Por ejemplo, puedes ocultar el elemento o mostrar un mensaje de confirmación
        const productElement = document.querySelector(`[data-name="${name}"]`);
        if (productElement) {
            productElement.style.display = 'none'; // Oculta el producto
            // También puedes mostrar un mensaje de confirmación aquí
        }
    });
});
