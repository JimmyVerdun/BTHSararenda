function calculateResults() {
    const form = document.forms["testForm"];
    const careerScores = {
        "Textiles y Confecciones": 0,
        "Carpintería en Metal y Madera": 0,
        "Electricidad Industrial": 0,
        "Electrónica": 0,
        "Mecánica Automotriz": 0,
        "Mecánica Industrial (Soldadura)": 0,
        "Sistemas Informáticos": 0
    };
    // Calcular los puntos para cada carrera
    careerScores["Textiles y Confecciones"] += parseInt(form.q1.value) + parseInt(form.q2.value) + parseInt(form.q3.value) + parseInt(form.q4.value) + parseInt(form.q5.value);
    careerScores["Carpintería en Metal y Madera"] += parseInt(form.q6.value) + parseInt(form.q7.value) + parseInt(form.q8.value) + parseInt(form.q9.value) + parseInt(form.q10.value);
    careerScores["Electricidad Industrial"] += parseInt(form.q11.value) + parseInt(form.q12.value) + parseInt(form.q13.value) + parseInt(form.q14.value) + parseInt(form.q15.value);
    careerScores["Electrónica"] += parseInt(form.q16.value) + parseInt(form.q17.value) + parseInt(form.q18.value) + parseInt(form.q19.value) + parseInt(form.q20.value);
    careerScores["Mecánica Automotriz"] += parseInt(form.q21.value) + parseInt(form.q22.value) + parseInt(form.q23.value) + parseInt(form.q24.value) + parseInt(form.q25.value);
    careerScores["Mecánica Industrial (Soldadura)"] += parseInt(form.q26.value) + parseInt(form.q27.value) + parseInt(form.q28.value) + parseInt(form.q29.value) + parseInt(form.q30.value);
    careerScores["Sistemas Informáticos"] += parseInt(form.q31.value) + parseInt(form.q32.value) + parseInt(form.q33.value) + parseInt(form.q34.value) + parseInt(form.q35.value);
    // Ordenar las carreras por puntaje
    const sortedCareers = Object.entries(careerScores).sort((a, b) => b[1] - a[1]);
    // Mostrar las 2 carreras con mayor puntaje
    document.getElementById("result1").innerHTML = `${sortedCareers[0][0]} con ${sortedCareers[0][1]} puntos.</span>`;
    document.getElementById("result2").innerHTML = `${sortedCareers[1][0]} con ${sortedCareers[1][1]} puntos.</span>`;
}