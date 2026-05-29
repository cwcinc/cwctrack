// Copyright (c) 2026 cwcinc. All rights reserved. Unauthorized use prohibited.

class Minimap {
  // upscale factor compared to regular thumbnail scale
  static SCALE = 8;
  static MAIN_DOT_RADIUS = 5;
  static MULTIPLAYER_DOT_RADIUS = 3;
  static DOT_COLOR = "red";

  constructor(soundManager, defaultClosed = true) {
    this.trackPreviewDiv = document.createElement("div");
    this.trackPreviewDiv.className = "track-preview-container";

    this.minimapButton = document.createElement("button");
    this.minimapButton.className = "button";
    this.minimapButton.innerHTML = '<img class="button-icon" src="images/search.svg"> ';
    this.minimapButton.append(document.createTextNode("Minimap"));

    const importArtButton = document.createElement("button");
    importArtButton.className = "load-image-button hidden";
    importArtButton.innerHTML = '<img class="button-icon" src="images/load.svg"> ';

    this.trackPreviewDiv.appendChild(importArtButton);
    this.importArtButton = importArtButton;

    this.lastTrackObject = null;

    this.isClosed = defaultClosed;
    if (this.isClosed) {
      this.trackPreviewDiv.classList.add("closed");
    }
    this.minimapButton.addEventListener("click", () => {
      soundManager.playUIClick();
      this.trackPreviewDiv.classList.toggle("closed");
      this.isClosed = this.trackPreviewDiv.classList.contains("closed");
      if (!this.isClosed) {
        this.initTrackPreview(this.lastTrackObject);
      }
    });

    this.playerMap = new Map();
    this.mainPlayerPos = {x: 0, y: 0, z: 0};
    this.minX = 0;
    this.minZ = 0;
    this.showPlayerDots = true;
  }

  initImportArtCallback(MAX_SIZE, environment, callback) {
    let blockColor;
    switch (environment) {
      case 0: // Summer
        blockColor = [0xff, 0xff, 0xff];
        break;
      case 1: // Winter
        blockColor = [0xbe, 0xd8, 0xf7];
        break;
      case 2: // Desert
        blockColor = [0xed, 0xe2, 0xaf];
        break;
    }

    const PALETTE = [
      [0x11, 0x20, 0x52], // 0: dark blue
      blockColor, // 1: white
      [0x33, 0x8c, 0xe0], // 2: light blue
      [0xe2, 0xc0, 0x26], // 3: yellow
      [0xd1, 0x29, 0x29], // 4: red
    ];

    const ENABLE_DITHERING = true;
    const ALPHA_THRESHOLD = 128;

    // nearest palette index by squared Euclidean distance in RGB
    const nearestColor = (r, g, b) => {
      let best = 0, bestDist = Infinity;
      for (let i = 0; i < PALETTE.length; i++) {
        const [pr, pg, pb] = PALETTE[i];
        const dr = r - pr, dg = g - pg, db = b - pb;
        const dist = dr * dr + dg * dg + db * db;
        if (dist < bestDist) { bestDist = dist; best = i; }
      }
      return best;
    };

    this.importArtButton.classList.remove("hidden");

    this.importArtButton.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            // scale down to fit within MAX_SIZE x MAX_SIZE, preserving aspect ratio
            const scale = Math.min(1, MAX_SIZE / Math.max(img.width, img.height));
            const w = Math.max(1, Math.round(img.width * scale));
            const h = Math.max(1, Math.round(img.height * scale));

            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.imageSmoothingEnabled = true; // averages pixels when downscaling
            ctx.drawImage(img, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;

            const rBuf = new Float32Array(w * h);
            const gBuf = new Float32Array(w * h);
            const bBuf = new Float32Array(w * h);
            const aBuf = new Uint8ClampedArray(w * h);
            for (let i = 0; i < w * h; i++) {
              rBuf[i] = data[i * 4];
              gBuf[i] = data[i * 4 + 1];
              bBuf[i] = data[i * 4 + 2];
              aBuf[i] = data[i * 4 + 3];
            }

            const blocks = [];
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = y * w + x;
                if (aBuf[idx] < ALPHA_THRESHOLD) continue; // skip transparent pixels

                const r = rBuf[idx], g = gBuf[idx], b = bBuf[idx];
                const colorIndex = nearestColor(r, g, b);
                blocks.push({ x, y, color: colorIndex });

                if (ENABLE_DITHERING) {
                  const [pr, pg, pb] = PALETTE[colorIndex];
                  const er = r - pr, eg = g - pg, eb = b - pb;
                  const spread = (dx, dy, f) => {
                    const nx = x + dx, ny = y + dy;
                    if (nx < 0 || nx >= w || ny < 0 || ny >= h) return;
                    const ni = ny * w + nx;
                    rBuf[ni] += er * f;
                    gBuf[ni] += eg * f;
                    bBuf[ni] += eb * f;
                  };
                  // Floyd–Steinberg distribution
                  spread(1, 0, 7 / 16);
                  spread(-1, 1, 3 / 16);
                  spread(0, 1, 5 / 16);
                  spread(1, 1, 1 / 16);
                }
              }
            }

            callback(blocks);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      };
      input.click();
    });
  }

  setShowPlayerDots(show) {
    this.showPlayerDots = show;
  }

  appendButton(container) {
    container.appendChild(this.minimapButton);
  }

  appendMinimap(container) {
    container.appendChild(this.trackPreviewDiv);
  }

  initTrackPreview(trackObject) {
    if (!trackObject) return;
    this.lastTrackObject = trackObject;
    if (this.isClosed) return;

    const trackData = trackObject.getTrackData();
    this.thumbCanvas = trackData.createThumbnail();
    if (!this.thumbCanvas) {
      console.error("Failed to create track thumbnail");
      return;
    }
    this.minX = trackData.m_storedMinX;
    this.minZ = trackData.m_storedMinZ;

    if (this.displayCanvas) {
      this.displayCanvas.remove();
    }

    this.displayCanvas = document.createElement("canvas");
    this.trackPreviewDiv.appendChild(this.displayCanvas);

    const rect = this.trackPreviewDiv.getBoundingClientRect();
    this.displayCanvas.width = rect.width;
    this.displayCanvas.height = rect.height;

    // fit the track within the container, leaving room for off-track dots
    const padding = 20;
    this.scale = Math.min(
      (rect.width - padding * 2) / this.thumbCanvas.width,
      (rect.height - padding * 2) / this.thumbCanvas.height
    );

    const trackW = this.thumbCanvas.width * this.scale;
    const trackH = this.thumbCanvas.height * this.scale;
    this.offsetX = (rect.width - trackW) / 2;
    this.offsetY = (rect.height - trackH) / 2;

    this.ctx = this.displayCanvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    this.ctx.drawImage(
      this.thumbCanvas,
      this.offsetX, this.offsetY,
      this.thumbCanvas.width * this.scale,
      this.thumbCanvas.height * this.scale
    );

    this.renderPlayer();
  }

  worldToDisplayCoords(worldX, worldZ) {
    return {
      x: (worldX / 20 - this.minX - 0.5) * this.scale + this.offsetX,
      y: (worldZ / 20 - this.minZ - 0.5) * this.scale + this.offsetY,
    };
  }

  setPlayerCar(id, carObject) {
    // random color seeded by id
    this.playerMap.set(id, {car: carObject, color: `hsl(${id * 137 % 360}, 50%, 50%)`});
  }

  updatePlayerPos(pos) {
    this.mainPlayerPos = pos;
    this.renderPlayer();
  }

  drawPlayerDot(x, z, color = Minimap.DOT_COLOR, radius = Minimap.MAIN_DOT_RADIUS) {
    const { x: dx, y: dy } = this.worldToDisplayCoords(x, z);

    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  renderPlayer() {
    if (!this.showPlayerDots || this.isClosed || !this.thumbCanvas || !this.displayCanvas) return;
    const { width, height } = this.displayCanvas;

    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(
      this.thumbCanvas,
      this.offsetX, this.offsetY,
      this.thumbCanvas.width * this.scale,
      this.thumbCanvas.height * this.scale
    );

    this.drawPlayerDot(this.mainPlayerPos.x, this.mainPlayerPos.z, Minimap.DOT_COLOR, Minimap.MAIN_DOT_RADIUS);

    for (const [id, obj] of this.playerMap.entries()) {
      if (obj.car) {
        const carPos = obj.car.getPosition();
        this.drawPlayerDot(carPos.x, carPos.z, obj.color, Minimap.MULTIPLAYER_DOT_RADIUS);
      }
    }
  }
}