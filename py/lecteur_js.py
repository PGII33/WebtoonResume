import json
import re
import update_episode

def extract_json(file_path):
    '''Function to extract JSON data from JavaScript code'''

    # Read the contents of the JavaScript file
    with open(file_path, "r", encoding="utf-8") as file:
        js_data = file.read()

    # Remove any leading/trailing JavaScript code
    js_data = js_data.strip()

    # Extract the JSON data from the JavaScript code
    data = js_data[js_data.index("["):js_data.rindex("]") + 1]

    return data

def parse_json(data):
    '''Function to parse JSON data into a Python object'''
    return json.loads(data)

def convert_review_objects(data):
    '''Function to convert each "Review" object into a dictionary'''
    for item in data:
        item["Review"] = {k: v for review in item["Review"] for k, v in review.items()}

    return data

def update_episode_count(data):
    '''Function to update the value of the "Episode" key in all items using the "get_episode_count" function'''
    for item in data:
        item["chapters"] = max(update_episode.get_episode_count(item["link"]), item["chapters"])

    return data
