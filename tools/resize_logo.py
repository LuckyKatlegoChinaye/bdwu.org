"""Generate optimized logo images from `images/logo.png`.

Usage:
  - Install Pillow: `pip install Pillow`
  - Run: `python tools/resize_logo.py`

This script reads `images/logo.png` and writes optimized PNG and WebP
variants at common sizes (32,48,96,192,512). Output files are written
into the same `images/` directory with names like `logo-32.png`.
"""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = ROOT / 'images'
SOURCE = IMAGES_DIR / 'logo.png'

SIZES = [32, 48, 96, 192, 512]

def ensure_source():
    if not SOURCE.exists():
        print(f"Source logo not found: {SOURCE}")
        return False
    return True

def resize_and_save(size:int):
    out_png = IMAGES_DIR / f'logo-{size}.png'
    out_webp = IMAGES_DIR / f'logo-{size}.webp'

    with Image.open(SOURCE) as im:
        # Convert to RGBA for correct transparency handling
        im = im.convert('RGBA')
        # Compute square canvas to avoid distortion
        # We'll resize preserving aspect, then paste centered on square background
        im_ratio = im.width / im.height
        target = (size, size)
        im_thumb = im.copy()
        im_thumb.thumbnail(target, Image.LANCZOS)

        # Create square canvas with transparent background
        canvas = Image.new('RGBA', target, (255,255,255,0))
        paste_x = (size - im_thumb.width) // 2
        paste_y = (size - im_thumb.height) // 2
        canvas.paste(im_thumb, (paste_x, paste_y), im_thumb)

        # Save optimized PNG
        canvas.save(out_png, format='PNG', optimize=True)
        # Save WebP for modern browsers
        canvas.save(out_webp, format='WEBP', quality=90, method=6)

        print(f"Wrote {out_png.name} and {out_webp.name}")

def generate_all():
    if not ensure_source():
        return
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    for s in SIZES:
        resize_and_save(s)

if __name__ == '__main__':
    generate_all()
