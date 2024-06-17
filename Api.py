from fastapi import FastAPI
import pickle
import numpy as np
from typing import List, Union

from pydantic import BaseModel

app = FastAPI()

# Charger le modèle
with open("model.pkl", "rb") as f:  # Ouvrir le fichier en mode lecture binaire
    model = pickle.load(f)
    print("Model loaded")


class Features(BaseModel):
    features: List[Union[
        int, bool, bool, bool, int, float, float, float, float, float, float, float, float, float, float, float, float,
        float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float,
        float, float, float, float]]


@app.post("/predict")
def predict(features: Features):  # Prend une liste en entrée
    print("Predict endpoint hit with features: %s", features.features)
    # Convertir les features en numpy array
    input_features = np.array(features.features).reshape(1, -1)
    # Faire la prédiction
    prediction = model.predict(input_features)
    return {"prediction": prediction.tolist()}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
