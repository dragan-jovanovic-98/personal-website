"""Make logo backgrounds transparent.

Flood-fills the background colour inward from each corner, so a solid (white,
cream, or coloured) background becomes transparent while any same-colour pixels
*inside* the logo are preserved. Already-transparent logos are skipped.

Outputs `<stem>-t.png` next to the source. Originals are left untouched.
"""

import os
import sys
from collections import deque
from PIL import Image

IMG_DIR = "/Users/dragan/Projects/claude_cowork/website/public/images"

LOGOS = [
    "Primesync_logo.png",
    "alk-logo.png",
    "kings-court-logo.png",
    "kc-markham-logo.png",
    "torqi-logo.png",
    "torqi-icon-192.png",
    "national-debt-relief-logo.png",  # may be .jpg; resolved below
    "national-debt-relief-logo.jpg",
    "the-zadegan-group-logo.png",  # may be .avif; resolved below
    "the-zadegan-group-logo.avif",
    "primesync_solutions_logo_square.jpeg",
]

TOL = 48  # per-channel tolerance for "matches the background"


def has_transparency(img):
    if img.mode in ("RGBA", "LA"):
        alpha = img.convert("RGBA").getchannel("A")
        return alpha.getextrema()[0] < 250
    if img.mode == "P" and "transparency" in img.info:
        return True
    return False


def flood_transparent(img, tol=TOL):
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    bg = px[0, 0]

    def near(c):
        return (
            abs(c[0] - bg[0]) <= tol
            and abs(c[1] - bg[1]) <= tol
            and abs(c[2] - bg[2]) <= tol
        )

    visited = bytearray(w * h)
    dq = deque()
    for sx, sy in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
        if not visited[sy * w + sx] and near(px[sx, sy]):
            visited[sy * w + sx] = 1
            dq.append((sx, sy))

    cleared = 0
    while dq:
        x, y = dq.popleft()
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)
        cleared += 1
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                idx = ny * w + nx
                if not visited[idx] and near(px[nx, ny]):
                    visited[idx] = 1
                    dq.append((nx, ny))
    return img, cleared, bg


def main():
    seen = set()
    for name in LOGOS:
        path = os.path.join(IMG_DIR, name)
        if not os.path.exists(path) or path in seen:
            continue
        seen.add(path)
        try:
            img = Image.open(path)
        except Exception as e:  # e.g. AVIF without plugin
            print(f"SKIP  {name}: cannot open ({e})")
            continue

        stem = os.path.splitext(name)[0]
        out = os.path.join(IMG_DIR, f"{stem}-t.png")

        if has_transparency(img):
            print(f"KEEP  {name}: already has transparency")
            continue

        result, cleared, bg = flood_transparent(img)
        result.save(out)
        pct = 100 * cleared / (result.size[0] * result.size[1])
        print(f"DONE  {name} -> {stem}-t.png  (bg~{bg[:3]}, cleared {pct:.0f}%)")


if __name__ == "__main__":
    main()
