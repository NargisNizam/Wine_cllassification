# Wine Classification 🍷

This is a Machine Learning project that predicts the class of wine based on its chemical properties.

## About the Project

In this project, I used the Wine dataset to train a Machine Learning classification model.

The trained model can predict the wine class based on the input values provided by the user.

## Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- FastAPI
- HTML
- CSS
- JavaScript

## Dataset

The project uses the Wine Classification dataset.

The dataset contains different chemical features of wine, such as:

- Alcohol
- Malic Acid
- Ash
- Magnesium
- Total Phenols
- Flavanoids
- Color Intensity
- Hue
- Proline

These features are used to predict the wine class.

## Project Files

- `train.py` — Used to train the Machine Learning model
- `main.py` — FastAPI application
- `wine_dataset.csv` — Dataset
- `wine_model.pkl` — Trained Machine Learning model
- `index.html` — Website interface
- `style.css` — Website styling
- `script.js` — JavaScript functionality
- `requirement.txt` — Required Python libraries

## How to Run

First, clone the repository:

```bash
git clone https://github.com/NargisNizam/Wine_cllassification.git

Go to the project folder:
cd Wine_cllassification

Install the required libraries:

pip install -r requirement.txt

Run the FastAPI application:

uvicorn main:app --reload

How It Works
The Wine dataset is loaded.
The data is prepared for Machine Learning.
A classification model is trained.
The trained model is saved.
FastAPI loads the trained model.
The user enters wine features.
The model predicts the wine class.
Future Improvements
Improve model accuracy
Add data visualization
Improve the website design
Deploy the project online
Author

Nargis Nizam

AI & Data Science | Machine Learning | Python | Web Development

