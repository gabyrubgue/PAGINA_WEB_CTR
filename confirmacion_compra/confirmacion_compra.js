const cambiarBtn = document.getElementById('cambiar-btn');
const guardarBtn = document.getElementById('guardar-btn');
const datosEntregaDiv = document.getElementById('datos-entrega');
const formularioEntregaDiv = document.getElementById('formulario-entrega');
const nombreEntrega = document.getElementById('nombre-entrega');
const telefonoEntrega = document.getElementById('telefono-entrega');
const direccionEntrega = document.getElementById('direccion-entrega');
const nombreInput = document.getElementById('nombre-input');
const telefonoInput = document.getElementById('telefono-input');
const direccionInput = document.getElementById('direccion-input');
const predeterminadoText = document.getElementById('predeterminado-text'); // Asegúrate de tener el ID correcto aquí

// Mostrar el formulario para editar
cambiarBtn.addEventListener('click', () => {
    datosEntregaDiv.style.display = 'none';
    formularioEntregaDiv.style.display = 'block';
    cambiarBtn.style.display = 'none';
    guardarBtn.style.display = 'inline-block';

    // Ocultar el texto "Predeterminado" si está visible
    if (predeterminadoText) {
        predeterminadoText.style.display = 'none'; // Oculta el texto
    }
});

// Guardar los cambios y mostrar los datos actualizados
guardarBtn.addEventListener('click', () => {
    // Obtener los valores del formulario
    const nuevoNombre = nombreInput.value;
    const nuevoTelefono = telefonoInput.value;
    const nuevaDireccion = direccionInput.value;

    // Actualizar los datos en la vista
    nombreEntrega.textContent = nuevoNombre;
    telefonoEntrega.textContent = nuevoTelefono;
    direccionEntrega.textContent = nuevaDireccion;

    // Volver a ocultar el formulario y mostrar los datos
    datosEntregaDiv.style.display = 'block';
    formularioEntregaDiv.style.display = 'none';
    cambiarBtn.style.display = 'inline-block';
    guardarBtn.style.display = 'none';

    // Mostrar nuevamente el texto "Predeterminado"
    if (predeterminadoText) {
        predeterminadoText.style.display = 'block'; // Muestra el texto
    }
});

// Selección de elementos del DOM para la parte de precios
const cantidadInput = document.getElementById('cantidad');
const precioProductoSpan = document.getElementById('precio-producto');
const totalPedidoSpan = document.getElementById('total-pedido');
const envio = 50;  // Precio de envío fijo
let precioProducto = 500;  // Precio unitario del producto

// Función para actualizar el precio total cuando cambie la cantidad
cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value);
    const totalCompra = cantidad * precioProducto;
    const totalPedido = totalCompra + envio;

    // Actualiza los valores en pantalla
    precioProductoSpan.textContent = totalCompra;
    totalPedidoSpan.textContent = totalPedido;
});

// Acción para el botón "Comprar Ahora"
const comprarBtn = document.querySelector('.comprar-ahora');
comprarBtn.addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
});

// Acción para el botón "Cancelar"
const cancelarBtn = document.querySelector('.cancelar');
cancelarBtn.addEventListener('click', () => {
    cantidadInput.value = 1;
    const totalCompra = precioProducto;
    const totalPedido = totalCompra + envio;

    // Restablece los valores en pantalla
    precioProductoSpan.textContent = totalCompra;
    totalPedidoSpan.textContent = totalPedido;
});
