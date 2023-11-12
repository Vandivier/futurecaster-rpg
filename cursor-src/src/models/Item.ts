import Phaser from "phaser";

export default class Item {
  name: string;
  description: string;
  power: number;

  constructor(name: string, description: string, power: number) {
    this.name = name;
    this.description = description;
    this.power = power;
  }

  useItem() {
    // Implement item usage logic here
    // Example: this.power -= 10;
  }
}
