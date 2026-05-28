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

    this.trackPreviewDiv.innerHTML = "";

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