#python -m pip install requests
import requests
import json
import random

API_KEY = ['XXXXXXXXXXXXXXXXXXXX',
           'XXXXXXXXXXXXXXXXXXXX',
           'XXXXXXXXXXXXXXXXXXXX']

api_key = random.choice(API_KEY)

url = f"https://api.apileague.com/retrieve-random-meme?api-key={api_key}"

headers = {
    'Accept': 'application/json',
    'x-api-key': api_key
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    meme_url = data.get("url")
    print(json.dumps({"message":meme_url}))
    data = {"key": meme_url}

else:
    print(f"Erreur: {response.status_code}")
