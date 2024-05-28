// array para almacenar las notas de los estudiantes
let estudiantes = [];

// funcion para agregar un estudiante
function agregarEstudiante() {
    // solicitar el nombre del estudiante
    let nombre = prompt("Ingrese el nombre del estudiante:");

    // solicitar las tres notas del estudiante
    let nota1 = parseFloat(prompt("Ingrese la primera nota (1-5):"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota (1-5):"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota (1-5):"));

    // validar las notas
    if (nota1 < 1 || nota1 > 5 || isNaN(nota1) ||
        nota2 < 1 || nota2 > 5 || isNaN(nota2) ||
        nota3 < 1 || nota3 > 5 || isNaN(nota3)) {
        alert("Las notas deben estar entre 1 y 5.");
        return;
    }

    // calcular la nota definitiva
    let notaDefinitiva = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);

    // almacenar el nombre y la nota definitiva en el array
    estudiantes.push({ nombre: nombre, nota: notaDefinitiva });

    alert("Nota definitiva de " + nombre + ": " + notaDefinitiva.toFixed(2));
}

// funcion para mostrar los resultados
function mostrarResultados() {
    let totalEstudiantes = estudiantes.length;
    let estudiantesGanaron = estudiantes.filter(estudiante => estudiante.nota > 3.5).length;

    alert("Total de estudiantes: " + totalEstudiantes);
    alert("Estudiantes que ganaron la materia: " + estudiantesGanaron);

    // mostrar el nombre y la nota de cada estudiante
    estudiantes.forEach(estudiante => {
        alert("Estudiante: " + estudiante.nombre + " - Nota definitiva: " + estudiante.nota.toFixed(2));
    });
}

// funcion salir
function salir() {
    let confirmar = confirm("¿Está seguro de que desea salir?");
    if (confirmar) {
        alert("Gracias por usar el sistema de control de notas.");
    }
}