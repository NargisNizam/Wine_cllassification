from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# Load trained model
model = joblib.load("wine_model.pkl")

class_names = {
    0: "Class 0",
    1: "Class 1",
    2: "Class 2"
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        features = [
            float(data["alcohol"]),
            float(data["malic_acid"]),
            float(data["ash"]),
            float(data["alcalinity_of_ash"]),
            float(data["magnesium"]),
            float(data["total_phenols"]),
            float(data["flavanoids"]),
            float(data["nonflavanoid_phenols"]),
            float(data["proanthocyanins"]),
            float(data["color_intensity"]),
            float(data["hue"]),
            float(data["od280_od315"]),
            float(data["proline"])
        ]

        prediction = model.predict([features])[0]
        probability = model.predict_proba([features])[0].max()

        return jsonify({
            "success": True,
            "prediction": class_names[int(prediction)],
            "confidence": round(float(probability) * 100, 2)
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(debug=True)