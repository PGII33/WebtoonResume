'''Module to get the number of pages of a webtoon'''

import requests
from bs4 import BeautifulSoup

def get_episode_count(URL):
    '''Function to get the number of pages of a webtoon'''
    # Faire une requête HTTP pour récupérer le contenu de la page
    page = requests.get(URL)
    print(URL)

    # Créer un objet BeautifulSoup pour analyser la page
    soup = BeautifulSoup(page.text, 'html.parser')

    # Trouver le nombre d'épisodes à partir de l'élément "span" avec l'attribut "data-episode-count"
    episode_count_element = soup.find(class_ = "_episodeItem")
    try:
        episode_count_element = soup.find(class_ ="tx").text
        episode_count_element = episode_count_element[1:]
    except AttributeError:
        episode_count_element = "Error: Episode count not found"

    return episode_count_element