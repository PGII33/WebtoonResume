import json
import re
import update_episode

# Specify the path to the JavaScript file
file_path = "../js/base_donnee.js"

def extract_json(js_data):
    '''Function to extract JSON data from JavaScript code'''
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
        item["chapters"] = update_episode.get_episode_count(item["link"])

    return data



# Read the contents of the JavaScript file
with open(file_path, "r") as file:
    js_data = file.read()

# Extract the JSON data from the JavaScript code
json_data = extract_json(js_data)

# Parse the JSON data into a Python object
data = parse_json(json_data)

# Convert each "Review" object into a dictionary
data = convert_review_objects(data)

# Update the value of the "Episode" key in all items
data = update_episode_count(data)
