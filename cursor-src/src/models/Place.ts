import Phaser from "phaser";

export default class Place {
  sprite: Phaser.Physics.Arcade.Sprite;
  name: string;
  description: string;
  characters: string[];
  items: string[];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    name: string,
    description: string,
    characters: string[],
    items: string[]
  ) {
    this.sprite = scene.physics.add.sprite(x, y, texture);
    this.name = name;
    this.description = description;
    this.characters = characters;
    this.items = items;
  }

  update() {
    // Update place logic here
    // Example: this.sprite.setVelocity(0, 0);
  }

  addCharacter(character: string) {
    this.characters.push(character);
  }

  removeCharacter(character: string) {
    const index = this.characters.indexOf(character);
    if (index > -1) {
      this.characters.splice(index, 1);
    }
  }

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
