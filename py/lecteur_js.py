import json
import re

# Specify the path to the JavaScript file
file_path = "../js/base_donnee.js"

# Read the contents of the JavaScript file
with open(file_path, "r") as file:
    js_data = file.read()

# Remove any leading/trailing JavaScript code
js_data = js_data.strip()

# Extract the JSON data from the JavaScript code
data = js_data[js_data.index("["):js_data.rindex("]") + 1]

# Print the JSON data
print(data)

# Parse the JSON data into a Python object
data = json.loads(data)

# Convert each "Review" object into a dictionary
for item in data:
    item["Review"] = {k: v for review in item["Review"] for k, v in review.items()}