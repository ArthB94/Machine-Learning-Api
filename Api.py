
from fastapi import FastAPI
import pickle
import numpy as np
from typing import List

app = FastAPI()

# Charger le modèle
with open("model.pkl", "rb") as f: # Ouvrir le fichier en mode lecture binaire
    model = pickle.load(f)



@app.post("/predict") 
def predict(features: List[float]): # Prend une liste de float en entrée
    # Convertir les features en numpy array
    input_features = np.array(features).reshape(1, -1)
    # Faire la prédiction
    prediction = model.predict(input_features)
    return {"prediction": prediction.tolist()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
