// carrito_compras.js

document.addEventListener('DOMContentLoaded', () => {
    // Manejo de botones de incrementar y decrementar
    const incrementButtons = document.querySelectorAll('.incrementar');
    const decrementButtons = document.querySelectorAll('.decrementar');
    const counters = document.querySelectorAll('.numero');

    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(counters[index].textContent);
            counters[index].textContent = count + 1;
            actualizarTotal();
        });
    });

    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(counters[index].textContent);
            if (count > 0) {
                counters[index].textContent = count - 1;
                actualizarTotal();
            }
        });
    });

    // Manejo de "Seleccionar Todo"
    const seleccionarTodoCheckbox = document.getElementById('seleccionarTodo');
    const productoCheckboxes = document.querySelectorAll('.checkbox');

    seleccionarTodoCheckbox.addEventListener('change', () => {
        productoCheckboxes.forEach(checkbox => {
            checkbox.checked = seleccionarTodoCheckbox.checked;
        });
        actualizarSeleccionados();
    });

    productoCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', actualizarSeleccionados);
    });

    function actualizarTotal() {
        let total = 0;
        counters.forEach(counter => {
            total += parseInt(counter.textContent);
        });
        document.getElementById('contadorTotal').textContent = `($${total})`;
    }

    function actualizarSeleccionados() {
        let seleccionados = 0;
        productoCheckboxes.forEach(checkbox => {
            if (checkbox.checked) seleccionados++;
        });
        document.getElementById('totalSeleccionados').textContent = `(${seleccionados})`;
    }
});
