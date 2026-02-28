import urllib.request
import os

images = {
    "potato-eaters.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Vincent_Willem_van_Gogh_084.jpg",
    "sunflowers.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg",
    "starry-night.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    "wheatfield.jpg": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg"
}

os.makedirs("public/images", exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in images.items():
    print(f"Downloading {name}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            with open(os.path.join("public/images", name), 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
