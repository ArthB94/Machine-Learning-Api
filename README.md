# Game Success Predictor

This project is a machine learning model that predicts the success of a game (average review score) based on the data from the `steam-games.csv` file. The model is served as a REST API using FastAPI.

The original data can be obtained from [Kaggle](https://www.kaggle.com/datasets/amanbarthwal/steam-store-data/).

## Features

- Predict game success based on various features.
- REST API for easy integration with other services.
- Uses FastAPI for high performance.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- FastAPI
- Numpy

### Installing

1. Clone the repository:

```bash
git clone https://github.com/ArthB94/Machine-Learning-Api.git
```

2. Install the dependencies:

```bash
pip install -r requirements.txt
```

3. Run the FastAPI server:

```bash
python Api.py
```

4. On another terminal, install the frontend dependencies and start the frontend server:

```bash
cd front
npm i
npm run dev
```

### Usage

To predict the success of a game, open the following url in your browser: `http://localhost:3000/dashboard`. Enter values in the different form inputs and click "Predict Success". The success prediction will appear in the list on the right of the form.

If you prefer to make an API request yourself, make a POST request to the `/predict` endpoint with the game features as the body. The response will be the predicted success of the game.

```bash
curl -X POST "http://localhost:8000/predict" -H  "accept: application/json" -H  "Content-Type: application/json" -d "[feature1, feature2, feature3, ...]"
```

The file `Model.py` contains the code to train and export the model. You can adjust parameters there.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
