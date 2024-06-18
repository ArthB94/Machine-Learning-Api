# Game Success Predictor

This project is a machine learning model that predicts the success of a game (average review score) based on the data from the `steam-games.csv` file. The model is served as a REST API using FastAPI.

The original data can be obtained from [Kaggle](https://www.kaggle.com/datasets/amanbarthwal/steam-store-data/).

## Features

- Predict game success based on various features.
- REST API for easy integration with other services.
- Uses FastAPI for high performance.
- Dockerized for easy deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- FastAPI
- Numpy
- Docker (optional)

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
fastapi run
```

### Usage

To predict the success of a game, make a POST request to the `/predict` endpoint with the game features as the body. The response will be the predicted success of the game.

```bash
curl -X POST "http://localhost:8000/predict" -H  "accept: application/json" -H  "Content-Type: application/json" -d "[feature1, feature2, feature3, ...]"
```

### Deployment

To deploy the model using Docker, build the image and run the container:

```bash
docker build -t game-success-predictor .
docker run -d -p 8000:8000 game-success-predictor
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.