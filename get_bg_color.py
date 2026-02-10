from PIL import Image
from collections import Counter
import sys

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        # Crop to a region that is likely background (e.g., top left corner) to avoid text
        img = img.crop((0, 0, 100, 100))
        pixels = list(img.getdata())
        counts = Counter(pixels)
        most_common = counts.most_common(1)[0][0]
        print(f"#{most_common[0]:02x}{most_common[1]:02x}{most_common[2]:02x}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    # Using the first image from the user's latest upload
    get_dominant_color("C:/Users/Admin/.gemini/antigravity/brain/tempmediaStorage/media__1770731016018.png")
