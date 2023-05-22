class LightContainer extends Phaser.GameObjects.Container {
  constructor(scene, x, y, name) {
    super(scene, x, y);
    this.visible = false;
    scene.add.existing(this);
    scene[name + "s"] = this;
    for (let i = 1; i < 6; i++) {
      this.add(new Light(scene, i * 20 - 30, 0, name + i, this));
    }
  }
}
