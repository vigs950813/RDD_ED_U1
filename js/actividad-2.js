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

    checkAnswer('q1', 'b', 'feedback-q1', {
        'a': 'La opción "Mezcla" tiene una complejidad promedio de O(n log n). <br>Respuesta correcta: b)',
        'c': 'Quick Sort tiene una complejidad promedio de O(n log n). <br>Respuesta correcta: b)'
    });

    checkAnswer('q2', 'b', 'feedback-q2', {
        'a': 'Mezcla (Merge Sort) no se enfoca en listas pequeñas. <br>Respuesta correcta: b)',
        'c': 'El ordenamiento por mezcla es más eficiente con O(n log n). <br>Respuesta correcta: b)'
    });

    checkAnswer('q3', 'b', 'feedback-q3', {
        'a': 'Seleccionar el elemento más pequeño es propio de Selección. <br>Respuesta correcta: b)',
        'c': 'Intercambiar el primer con último elemento no describe Inserción. <br>Respuesta correcta: b)'
    });

    checkAnswer('q4', 'b', 'feedback-q4', {
        'a': 'Bubble Sort no es tan eficiente en listas casi ordenadas. <br>Respuesta correcta: b)',
        'c': 'Selection Sort no optimiza listas casi ordenadas como Inserción. <br>Respuesta correcta: b)'
    });

    checkAnswer('q5', 'b', 'feedback-q5', {
        'a': 'No es ideal para listas grandes debido a su complejidad O(n²). <br>Respuesta correcta: b)',
        'c': 'Este algoritmo no es específico para listas de números repetidos. <br>Respuesta correcta: b)'
    });

    checkAnswer('q6', 'c', 'feedback-q6', {
        'a': 'Inserción no usa el enfoque de división y conquista. <br>Respuesta correcta: c)',
        'b': 'Bubble Sort no emplea división y conquista. <br>Respuesta correcta: c)'
    });

    checkAnswer('q7', 'c', 'feedback-q7', {
        'a': 'Bubble Sort tiene complejidad O(n²) en el peor caso. <br>Respuesta correcta: c)',
        'b': 'O(n) describe casos ya ordenados, no el peor caso. <br>Respuesta correcta: c)'
    });

    checkAnswer('q8', 'a', 'feedback-q8', {
        'b': 'Selection Sort no garantiza estabilidad en ordenamiento. <br>Respuesta correcta: a)',
        'c': 'Quick Sort tampoco garantiza estabilidad. <br>Respuesta correcta: a)'
    });

    checkAnswer('q9', 'b', 'feedback-q9', {
        'a': 'Insertion Sort tiene O(n²), mientras que Merge Sort tiene O(n log n). <br>Respuesta correcta: b)',
        'c': 'Quick Sort y Selection Sort difieren en complejidad promedio. <br>Respuesta correcta: b)'
    });

    // Mostrar el total de respuestas correctas e incorrectas
    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    console.log(resultMessage); // Puedes mostrar esto en un elemento HTML si lo deseas
}
