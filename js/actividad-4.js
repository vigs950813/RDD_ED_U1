function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, incorrectFeedback) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = `<span style="color: red;">Respuesta incorrecta. ${incorrectFeedback[selectedAnswer.value]}</span>`;
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    // Preguntas y retroalimentación personalizada
    checkAnswer('q1', 'b', 'feedback-q1', {
        'a': 'La exploración exhaustiva busca la mejor solución, no simplemente cualquier solución viable. <br>Respuesta correcta: b)',
        'c': 'El enfoque de aleatorización no es parte de la exploración exhaustiva, que evalúa todas las combinaciones. <br>Respuesta correcta: b)'
    });

    checkAnswer('q2', 'b', 'feedback-q2', {
        'a': 'La programación por vuelta atrás implica evaluar todas las posibilidades y retroceder en caso de una solución no válida. <br>Respuesta correcta: b)',
        'c': 'Dividir y conquistar es un enfoque diferente que no se utiliza en la vuelta atrás. <br>Respuesta correcta: b)'
    });

    checkAnswer('q3', 'c', 'feedback-q3', {
        'a': 'La complejidad temporal de la exploración exhaustiva puede ser O(n!), ya que evalúa todas las permutaciones. <br>Respuesta correcta: c)',
        'b': 'La memoria segmentada no se relaciona con la complejidad de la exploración exhaustiva. <br>Respuesta correcta: c)'
    });

    checkAnswer('q4', 'b', 'feedback-q4', {
        'a': 'La vuelta atrás se utiliza específicamente para resolver problemas con soluciones válidas definidas. <br>Respuesta correcta: b)',
        'c': 'Las soluciones deben tener restricciones para que la vuelta atrás sea efectiva. <br>Respuesta correcta: b)'
    });

    checkAnswer('q5', 'c', 'feedback-q5', {
        'a': 'La complejidad de la vuelta atrás para problemas de permutaciones es O(n!). <br>Respuesta correcta: c)',
        'b': 'La complejidad de tiempo en este contexto no es O(n^2). <br>Respuesta correcta: c)'
    });

    checkAnswer('q6', 'b', 'feedback-q6', {
        'a': 'La exploración exhaustiva se utiliza en problemas donde la solución óptima es necesaria. <br>Respuesta correcta: b)',
        'c': 'La exploración exhaustiva es más adecuada para problemas con múltiples soluciones óptimas. <br>Respuesta correcta: b)'
    });

    checkAnswer('q7', 'b', 'feedback-q7', {
        'a': 'La complejidad espacial de la vuelta atrás es O(n), ya que depende de la profundidad de la recursión. <br>Respuesta correcta: b)',
        'c': 'La vuelta atrás puede requerir una cantidad significativa de espacio para las llamadas recursivas. <br>Respuesta correcta: b)'
    });

    checkAnswer('q8', 'a', 'feedback-q8', {
        'b': 'La eliminación anticipada de soluciones no válidas es una estrategia clave para mejorar la eficiencia. <br>Respuesta correcta: a)',
        'c': 'La programación dinámica no se utiliza directamente en la vuelta atrás. <br>Respuesta correcta: a)'
    });

    checkAnswer('q9', 'b', 'feedback-q9', {
        'a': 'La programación por exploración exhaustiva es ineficiente para problemas grandes, lo cual es su limitación. <br>Respuesta correcta: b)',
        'c': 'La programación por exploración exhaustiva puede ser paralelizada, pero no de manera eficiente. <br>Respuesta correcta: b)'
    });

    // Mostrar el total de respuestas correctas e incorrectas
    // const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    // console.log(resultMessage); // O puedes mostrar esto en un elemento HTML si lo deseas
}
