import Phaser from "phaser";

export default class Character {
  sprite: Phaser.Physics.Arcade.Sprite;
  name: string;
  race: string;
  skills: string[];
  items: string[];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    name: string,
    race: string,
    skills: string[],
    items: string[]
  ) {
    this.sprite = scene.physics.add.sprite(x, y, texture);
    this.name = name;
    this.race = race;
    this.skills = skills;
    this.items = items;
  }

  update() {
    // Update character logic here
    // Example: this.sprite.setVelocity(0, 0);
  }

  addSkill(skill: string) {
    this.skills.push(skill);
  }

  removeSkill(skill: string) {
    const index = this.skills.indexOf(skill);
    if (index > -1) {
      this.skills.splice(index, 1);
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
