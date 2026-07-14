const cantidad = Number(input.value);

if (input.value === "") {
    alert("Debes escoger una cantidad.");
    return;
}

if (cantidad < 1 || cantidad > 10) {
    alert("La cantidad debe estar entre 1 y 10.");
    return;
}