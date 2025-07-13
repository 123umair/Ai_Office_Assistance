import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

import re

def split_points(text):
    # split on numbers like 1. 2. 3.
    points = re.split(r'(?=\d+\.\s)', text)
    points = [p.strip() for p in points if p.strip()]
    return points
# Yahan apni Together AI key daal do:
TOGETHER_API_KEY = "e1c14a75c4806092a591e9bf7152d54acf138b889859d59be05c98497ac6cd3a"
TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")  #when key exists

    payload = {
        "model": "mistralai/Mixtral-8x7B-Instruct-v0.1",
        "messages": [
            {"role": "system", "content": "You are an office chatbot."},
            {"role": "user", "content": user_msg}
        ],
        "temperature": 0.5,
        "max_tokens": 256
    }

    headers = {
        "Authorization": f"Bearer {TOGETHER_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(TOGETHER_API_URL, json=payload, headers=headers)
    data = response.json()
    reply = data["choices"][0]["message"]["content"]
    points = split_points(reply)

    return jsonify({"reply": points})

if __name__ == "__main__":
    app.run(debug=True)
