from PIL import Image
from collections import Counter
import sys

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.resize((100, 100)) # Resize for speed
        pixels = list(img.getdata())
        # Filter out transparent pixels if any
        pixels = [p for p in pixels if len(p) == 3 or p[3] > 0]
        # Count most common color
        counts = Counter(pixels)
        most_common = counts.most_common(1)[0][0]
        print(f"#{most_common[0]:02x}{most_common[1]:02x}{most_common[2]:02x}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    get_dominant_color("C:/Users/Admin/.gemini/antigravity/brain/tempmediaStorage/media__1770731016018.png")
