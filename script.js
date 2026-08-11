const form = document.getElementById("predictionForm");

const resultBox = document.getElementById("result");
const errorBox = document.getElementById("error");

const predictionText = document.getElementById("prediction");
const confidenceText = document.getElementById("confidence");


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    resultBox.classList.add("hidden");
    errorBox.classList.add("hidden");

    const data = {
        alcohol: document.getElementById("alcohol").value,
        malic_acid: document.getElementById("malic_acid").value,
        ash: document.getElementById("ash").value,
        alcalinity_of_ash: document.getElementById("alcalinity_of_ash").value,
        magnesium: document.getElementById("magnesium").value,
        total_phenols: document.getElementById("total_phenols").value,
        flavanoids: document.getElementById("flavanoids").value,
        nonflavanoid_phenols: document.getElementById("nonflavanoid_phenols").value,
        proanthocyanins: document.getElementById("proanthocyanins").value,
        color_intensity: document.getElementById("color_intensity").value,
        hue: document.getElementById("hue").value,
        od280_od315: document.getElementById("od280_od315").value,
        proline: document.getElementById("proline").value
    };

    try {

        const response = await fetch("/predict", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {

            predictionText.textContent =
                "Wine Class: " + result.prediction;

            confidenceText.textContent =
                "Confidence: " + result.confidence + "%";

            resultBox.classList.remove("hidden");

        } else {

            errorBox.textContent = result.error;
            errorBox.classList.remove("hidden");
        }

    } catch (error) {

        errorBox.textContent =
            "Server se connection nahi ho saka.";

        errorBox.classList.remove("hidden");

        console.error(error);
    }
});