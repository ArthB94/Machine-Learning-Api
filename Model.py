import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Charger les données à partir du fichier CSV
df = pd.read_csv('steam-games.csv')
columns = ['genres','categories','developer','publisher','original_price','discounted_price','dlc_available','age_rating','content_descriptor','win_support','mac_support','linux_support','overall_review_%','overall_review_count']
df = df[columns]

# Splitter les colonnes genres  content_descriptor et categories

new_genres = df['genres'].str.split(', ', expand=True)
new_genres = pd.get_dummies(new_genres.apply(pd.Series).stack()).groupby(level=0).sum()
print(new_genres)

# new_content_descriptor = df['content_descriptor'].str.split(', ', expand=True).stack().unique()
# new_categories = df['categories'].str.split(', ', expand=True).stack().unique()

# Créer des colonnes pour chaque genre

df = df.join(pd.DataFrame(columns=new_genres, index=df.index))
df = df.join(pd.DataFrame(columns=new_content_descriptor, index=df.index))
df = df.join(pd.DataFrame(columns=new_categories, index=df.index))

# Remplir les colonnes avec des 0 et 1

df[new_genres] = 0
df[new_content_descriptor] = 0
df[new_categories] = 0

for i, row in df.iterrows():
    for genre in row['genres'].split(', '):
        df.at[i, genre] = 1

    for content_descriptor in row['content_descriptor'].split(', '):
        df.at[i, content_descriptor] = 1

    for category in row['categories'].split(', '):
        df.at[i, category] = 1

# Supprimer les colonnes genres, content_descriptor et categories
df = df.drop(['genres', 'content_descriptor', 'categories'], axis=1)






# Matrice de correlation
correlation_matrix = df.corr()
print(correlation_matrix)

# Séparer les caractéristiques (X) de la variable cible (y)
target_variable = 'overall_review'

X = df.drop(target_variable, axis=1)
y = df[target_variable]

# Diviser les données en ensembles d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=7)

# Créer un modèle de régression linéaire
model = LinearRegression()

# Entraîner le modèle sur les données d'entraînement
model.fit(X_train, y_train)

# Faire des prédictions sur les données de test
y_pred = model.predict(X_test)

# Calculer l'erreur quadratique moyenne (RMSE)
rmse = mean_squared_error(y_test, y_pred, squared=False)

# Afficher le RMSE
print('RMSE:', rmse)


# Sauvegarder le modèle dans un fichier binaire
# import pickle

# with open("model.pkl", "wb") as f:
#     pickle.dump(model, f)


