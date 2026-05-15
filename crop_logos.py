import os
from PIL import Image, ImageChops

def crop_white_borders(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        
        # Create a white background image of the same size
        bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
        
        # Paste the image on the white background (in case it has transparent borders)
        # This makes sure we are only looking at "visual" vs "white"
        bg.paste(img, mask=img)
        
        # Find the difference between the image and a purely white image
        diff = ImageChops.difference(bg, Image.new("RGBA", img.size, (255, 255, 255, 255)))
        
        # Bounding box of the non-white pixels
        bbox = diff.getbbox()
        
        if bbox:
            # Crop the ORIGINAL image to this bounding box
            cropped_img = img.crop(bbox)
            cropped_img.save(img_path)
            print(f"Cropped: {img_path}")
        else:
            print(f"No crop needed or image is entirely white: {img_path}")
            
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

dirs = [
    "public/assets/software",
    "public/assets/social",
    "public/assets/certifications"
]

for d in dirs:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if f.endswith(".png") or f.endswith(".jpg") or f.endswith(".jpeg"):
            crop_white_borders(os.path.join(d, f))
