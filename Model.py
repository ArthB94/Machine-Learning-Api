import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Charger les données à partir du fichier CSV
df = pd.read_csv('steam-games.csv')
columns = ['genres','categories','developer','publisher','original_price','discounted_price','dlc_available','age_rating','content_descriptor','win_support','mac_support','linux_support','overall_review_%','overall_review_count']
df = df[columns]

# Splitter les colonnes genres content_descriptor et categories

new_genres = df['genres'].str.split(', ', expand=True)
new_genres = pd.get_dummies(new_genres.stack()).groupby(level=0).sum()

new_content_descriptor = df['content_descriptor'].str.split(', ', expand=True)
new_content_descriptor = pd.get_dummies(new_content_descriptor.stack()).groupby(level=0).sum()

new_categories = df['categories'].str.split(', ', expand=True)
new_categories = pd.get_dummies(new_categories.stack()).groupby(level=0).sum()


# get_dumies pour developer, publisher
new_developer = pd.get_dummies(df['developer'])
new_publisher = pd.get_dummies(df['publisher'])

# Ajouter les colonnes séparées au DataFrame
df = pd.concat([df, new_genres, new_content_descriptor, new_categories, new_developer, new_publisher], axis=1)

# Supprimer les colonnes originales
df.drop(columns=['genres', 'categories', 'developer', 'publisher', 'content_descriptor'], inplace=True)

# Si la colonne original_price contient des valeurs manquantes, les remplacer par la valeur pour discounted_price
df['price'] = df['original_price'].fillna(df['discounted_price'])
df.drop(columns=['original_price', 'discounted_price'], inplace=True)

# remplacer la colonne original_price en float
df['price'] = df['price'].str.replace('₹', '')
df['price'] = df['price'].str.replace(',', '')
df['price'] = df['price'].str.replace('Free', '0')


print(df['price'])



# Matrice de correlation
dfcore = df[['price','dlc_available','age_rating','win_support','mac_support','linux_support','overall_review_count']]
correlation_matrix = dfcore.corr()
print(correlation_matrix)
print(df.head())

# Séparer les caractéristiques (X) de la variable cible (y)
target_variable = 'overall_review_count'
df = df.drop('overall_review_%', axis=1)

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


