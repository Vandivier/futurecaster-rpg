import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // Load assets here
    // Example: this.load.image('key', 'path/to/image.png');
  }

  create() {
    // Initialize game objects here
    // Example: this.add.image(0, 0, 'key');

    // Once everything is loaded, start the WorldScene
    this.scene.start("WorldScene");
  }
}
