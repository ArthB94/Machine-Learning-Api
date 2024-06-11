import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import MinMaxScaler

# TODO
# - Penser à bien analyser les variables
# - Scale les valeurs (sinon ça marchera pas) -> Ex : ramener à une échelle entre 0 et 1.
# x One Hot Encoding (pour les variable de catégories)

# Problèmes identifiés :
# x Fautes dans le dataset (surtout content_descriptor) (ex : Violance au lieu de Violence, Intense Violence et Extreme Violence : quelle différence ?, un identifiant complet ?? "PEGI URN: 60978P-C81M00-003000-000000")
# x Valeurs manquantes (ex : original_price)

# Genres : 
# x Supprimer "Early Access", "Indie" des genres ?
# x Supprimer ceux qui ne sont pas des jeux ? (Animation & Modeling, Audio Production, Design & Illustration, Game Development, Movie, Software Training, Utilities, Video Production, Web Publishing)

# Charger les données à partir du fichier CSV
df = pd.read_csv('steam-games.csv')
columns = ['genres','categories','developer','publisher','original_price','discounted_price','dlc_available','age_rating','content_descriptor','win_support','mac_support','linux_support','overall_review_%','overall_review_count']
df = df[columns]

# Splitter les colonnes genres content_descriptor et categories

new_genres = df['genres'].str.split(', ', expand=True)
new_genres = pd.get_dummies(new_genres.stack()).groupby(level=0).sum()
# Remove columns Early Access and Indie
new_genres.drop(columns=['Early Access', 'Indie'], inplace=True)
# Remove columns that are not games
new_genres.drop(columns=['Animation & Modeling', 'Audio Production', 'Design & Illustration', 'Game Development', 'Movie', 'Software Training', 'Utilities', 'Video Production', 'Web Publishing'], inplace=True)


# new_content_descriptor = df['content_descriptor'].str.split(', ', expand=True)
# new_content_descriptor = pd.get_dummies(new_content_descriptor.stack()).groupby(level=0).sum()

new_categories = df['categories'].str.split(', ', expand=True)
new_categories = pd.get_dummies(new_categories.stack()).groupby(level=0).sum()

# get_dumies pour developer, publisher
# new_developer = pd.get_dummies(df['developer'])
# new_publisher = pd.get_dummies(df['publisher'])

# Remove genres and categories that have less than 1000 rows that have a value of 1
new_genres = new_genres.loc[:, new_genres.sum() >= 1000]
new_categories = new_categories.loc[:, new_categories.sum() >= 1000]

# Ajouter les colonnes séparées au DataFrame
# df = pd.concat([df, new_genres, new_content_descriptor, new_categories, new_developer, new_publisher], axis=1)
df = pd.concat([df, new_genres, new_categories], axis=1)

# Supprimer les colonnes originales
df.drop(columns=['genres', 'categories', 'developer', 'publisher', 'content_descriptor'], inplace=True)

# Remove rows where all genres are False
df = df.loc[~(df[new_genres.columns] == 0).all(axis=1)]

# Si la colonne original_price contient des valeurs manquantes, les remplacer par la valeur pour discounted_price
df['price'] = df['original_price'].fillna(df['discounted_price'])
df.drop(columns=['original_price', 'discounted_price'], inplace=True)

# remplacer la colonne original_price en float
df['price'] = df['price'].str.replace('₹', '')
df['price'] = df['price'].str.replace(',', '')
df['price'] = df['price'].str.replace('Free', '0.00')
# Convert price from indian rupees to euros (1 INR = 0.011 EUR)
df['price'] = df['price'].astype(float) * 0.011

print(df['price'])

# Scale les valeurs du nombre d'avis de 0 à 1 avec le MinMaxScaler de sklearn
scaler = MinMaxScaler()
df['overall_review_count'] = scaler.fit_transform(pd.DataFrame(df['overall_review_count']))

# Drop the values where overall_review_count is 0.
df = df[df['overall_review_count'] >= 0.00001]

# Supprimer les lignes avec des valeurs manquantes
df = df.dropna()


# Matrice de correlation
dfcore = df[['price','dlc_available','age_rating','win_support','mac_support','linux_support','overall_review_count']]
correlation_matrix = dfcore.corr()
print(correlation_matrix)
print(df.head())

# Séparer les caractéristiques (X) de la variable cible (y)
# target_variable = 'overall_review_count'
# df = df.drop('overall_review_%', axis=1)

# X = df.drop(target_variable, axis=1)
# y = df[target_variable]

y = df[['overall_review_count', 'overall_review_%']]
X = df.drop(['overall_review_count', 'overall_review_%'], axis=1)

df1 = X[X.isna().any(axis=1)]
print (df1)

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


