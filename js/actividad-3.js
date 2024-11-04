function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        
        // Para los campos de texto
        if (['q8', 'q9', 'q10'].includes(questionName)) {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        } else {
            // Para las preguntas de opción múltiple
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
                } else {
                    incorrectCount++;
                    feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
                }
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta</span>";
            }
        }
    }

    // Validar preguntas de opción múltiple
    checkAnswer('q1', 'b', 'feedback-q1', 'Recuerda que la búsqueda secuencial compara cada elemento hasta encontrar el objetivo o alcanzar el final. <br>Respuesta correcta: b)');
    checkAnswer('q2', 'b', 'feedback-q2', 'La búsqueda binaria requiere que los elementos estén ordenados para funcionar correctamente. <br>Respuesta correcta: b)');
    checkAnswer('q3', 'c', 'feedback-q3', 'En el peor caso, la búsqueda secuencial tiene una complejidad de O(n). <br>Respuesta correcta: c)');
    checkAnswer('q4', 'b', 'feedback-q4', 'En el peor caso, la búsqueda binaria tiene una complejidad de O(log n). <br>Respuesta correcta: b)');
    checkAnswer('q5', 'c', 'feedback-q5', 'La búsqueda indexada utiliza un índice de punteros a registros para mejorar la eficiencia. <br>Respuesta correcta: c)');
    checkAnswer('q6', 'c', 'feedback-q6', 'La búsqueda indexada es más eficiente para listas grandes y desordenadas. <br>Respuesta correcta: c)');
    checkAnswer('q7', 'c', 'feedback-q7', 'La principal ventaja de la búsqueda binaria es que su orden de complejidad es más bajo en listas ordenadas. <br>Respuesta correcta: c)');

    // Validar preguntas de texto
    checkAnswer('q8', 'toma el elemento del medio', 'feedback-q8', 'La búsqueda binaria toma el elemento del medio y lo compara con el objetivo, ajustando el rango de búsqueda en consecuencia. <br>Respuesta correcta: Toma el elemento del medio');
    checkAnswer('q9', 'O(n) para búsqueda secuencial y O(log n) para búsqueda binaria', 'feedback-q9', 'La búsqueda secuencial tiene complejidad O(n) y la búsqueda binaria tiene complejidad O(log n), lo que las hace diferentes en eficiencia. <br>Respuesta correcta: O(n) para búsqueda secuencial y O(log n) para búsqueda binaria');
    checkAnswer('q10', 'utiliza un índice para acceder rápidamente a los datos', 'feedback-q10', 'La búsqueda indexada permite acceder rápidamente a los registros sin necesidad de revisar cada uno, mejorando la velocidad en bases de datos grandes. <br>Respuesta correcta: Utiliza un índice para acceder rápidamente a los datos');

    // Validar pregunta verdadero/falso
    checkAnswer('q11', 'a', 'feedback-q11', 'La búsqueda secuencial es adecuada para listas pequeñas o no ordenadas. <br>Respuesta correcta: Verdadero');

    // Puedes mostrar el número total de respuestas correctas si lo deseas
    //console.log(`Respuestas correctas: ${correctCount}`);
    //console.log(`Respuestas incorrectas: ${incorrectCount}`);
}
