import os
import random

colors = {
    "potato-eaters.jpg": ["#5a4634", "#3d3024", "#2a221a"],
    "sunflowers.jpg": ["#e0a81d", "#c7860d", "#a26a06"],
    "starry-night.jpg": ["#162a4d", "#101f3b", "#0a1427"],
    "wheatfield.jpg": ["#1c305c", "#7e622b", "#0f1c37"]
}

os.makedirs("public/images", exist_ok=True)

for name, palette in colors.items():
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <defs>
    <linearGradient id="grad_{name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{palette[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:{palette[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{palette[2]};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad_{name})" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="24" font-family="sans-serif">{name.replace('.jpg', '')}</text>
</svg>"""
    with open(os.path.join("public/images", name.replace('.jpg', '.svg')), 'w') as f:
        f.write(svg_content)
