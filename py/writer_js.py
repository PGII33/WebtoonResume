#Here I want to rewrite the writer_js.py file to change information using lecteur_js.py and update_episode.py
import json
import re
import update_episode
import lecteur_js

data = lecteur_js.extract_json("../js/base_donnee.js")
data = lecteur_js.parse_json(data)
data = lecteur_js.convert_review_objects(data)
data = lecteur_js.update_episode_count(data)

# Assuming 'data' is a list of dictionaries
for item in data:
    if 'Review' in item:
        item['Review'] = [item['Review']]

# Now write the updated data to the file
with open("../js/base_donnee.js", "w", encoding="utf-8") as file:
    file.write("var webtoons = ")
    file.write(json.dumps(data, indent=4, ensure_ascii=False))

# Print the updated data
with open("../js/base_donnee.js", "r", encoding="utf-8") as file:
    print(file.read())