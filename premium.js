document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar la selección de plan
    function handlePlanSelection(planId) {
        const selectedPlan = document.getElementById(planId);

        // Simplemente cambia el texto del plan actual
        document.querySelector(".planActual").innerHTML = `<h2>Plan Actual</h2>
                                                            <p>Has seleccionado el plan: ${selectedPlan.querySelector("h3").textContent}</p>`;
    }

    // Agregar event listeners para los cuadros de planes
    document.getElementById("freePlan").addEventListener("click", function() {
        handlePlanSelection("freePlan");
    });

    document.getElementById("studentPlan").addEventListener("click", function() {
        handlePlanSelection("studentPlan");
    });
});
