class Light extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y, name, parent) {
    super(scene, x, y, 10, 20, parent);
    this.isFilled = true;
    this.fillColor = 16711680;
    scene[name] = this;
  }
}
