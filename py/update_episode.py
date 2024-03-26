'''Module to get the number of pages of a webtoon'''

import requests
from bs4 import BeautifulSoup

# URL du webtoon
URL = ""

# Faire une requête HTTP pour récupérer le contenu de la page
page = requests.get(URL)

# Créer un objet BeautifulSoup pour analyser la page
soup = BeautifulSoup(page.text, 'html.parser')

# Trouver le nombre d'épisodes à partir de l'élément "span" avec l'attribut "data-episode-count"
episode_count_element = soup.find(class_ = "_episodeItem")
episode_count_element = soup.find(class_ ="tx").text
episode_count_element = episode_count_element[1:]
print(episode_count_element)
