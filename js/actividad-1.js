function validarRespuestas() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: 'v',
        q2: 'f',
        q3: 'v',
        q4: 'f',
        q5: 'v',
        q6: 'v',
        q7: 'f',
        q8: 'v',
        q9: 'v',
        q10: 'f',
    };

    // Definir los mensajes de retroalimentación
    const mensajesDeRetroalimentacion = {
        q1: 'Una de las características esenciales de un algoritmo es que debe ser finito, es decir, debe terminar en algún momento. No puede ejecutarse indefinidamente y debe llevar a un resultado concreto. <br>Respuesta correcta: Verdadero',
        q2: 'El pseudocódigo es una representación informal de un algoritmo. No sigue las reglas de ningún lenguaje de programación en específico; su propósito es ser entendible, no necesariamente ejecutable. <br>Respuesta correcta: Falso',
        q3: 'Los TDA definen estructuras y operaciones independientemente de cómo se implementan. Esto permite al programador enfocarse en qué hacer, no en cómo hacerlo. <br>Respuesta correcta: Verdadero',
        q4: 'Además de la notación Big O, que representa el peor caso, también existen otras notaciones como Ω (mejor caso) y Θ (caso promedio) para expresar la complejidad de un algoritmo. <br>Respuesta correcta: Falso',
        q5: 'La notación O(1) indica que el tiempo de ejecución del algoritmo no depende del tamaño de la entrada. Esto significa que siempre se ejecutará en el mismo tiempo, independientemente de la cantidad de datos. <br>Respuesta correcta: Verdadero',
        q6: 'Los algoritmos detallan los pasos necesarios para resolver problemas específicos, mientras que los TDA se centran en la estructura y organización de los datos y definen qué operaciones son posibles, no cómo se realizan. <br>Respuesta correcta: Verdadero',
        q7: 'No existe un idioma estándar para el pseudocódigo; se puede escribir en cualquier idioma. Lo importante es que sea claro y entendible para el público al que va dirigido. <br>Respuesta correcta: Falso',
        q8: 'La complejidad espacial se refiere al espacio en memoria que un algoritmo requiere, incluyendo variables, arreglos, estructuras temporales, etc. <br>Respuesta correcta: Verdadero',
        q9: 'Los TDA son modelos abstractos de datos que definen qué operaciones pueden realizarse. La implementación específica puede variar, pero el comportamiento y las operaciones del TDA siguen siendo las mismas. <br>Respuesta correcta: Verdadero',
        q10: 'Para entradas grandes, un algoritmo con complejidad O(log n) generalmente se ejecuta mucho más rápido que uno con O(n^2), ya que logaritmos crecen mucho más lentamente que expresiones cuadráticas. <br>Respuesta correcta: Falso',
    };

    // Iterar sobre cada pregunta
    for (let i = 1; i <= 10; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);
        const preguntaRow = document.getElementById('pregunta' + i);

        // Limpiar colores previos y mensajes
        preguntaRow.style.backgroundColor = '';
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        // Verificar cuántos checkboxes están marcados
        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            // Obtener el valor del checkbox marcado
            const valorCheckbox = checkboxesMarcados[0].value;

            // Verificar si la respuesta es correcta
            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                // Respuesta correcta, pintar de verde (60% opaco) y mostrar mensaje
                preguntaRow.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; // lightgreen
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'green';
                mensaje.innerText = 'Respuesta correcta';
                preguntaRow.appendChild(mensaje);
            } else {
                // Respuesta incorrecta, pintar de rojo (60% opaco) y mostrar mensaje de repaso personalizado
                preguntaRow.style.backgroundColor = 'rgba(255, 99, 71, 0.3)'; // lightcoral
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'red';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName]; // Usar innerHTML para mostrar HTML correctamente
                preguntaRow.appendChild(mensaje);
            }
        } else if (checkboxesMarcados.length === 0) {
            // Si no se selecciona ninguna opción, pintar de azul (60% opaco)
            preguntaRow.style.backgroundColor = 'rgba(173, 216, 230, 0.3)'; // lightblue
        } else if (checkboxesMarcados.length > 1) {
            // Mostrar mensaje de error si más de un checkbox está marcado en una fila
            alert('Error: Solo puedes seleccionar una opción por pregunta.');
            return; // Detener la validación si hay un error
        }
    }
}
