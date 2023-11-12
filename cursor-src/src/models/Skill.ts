import Phaser from "phaser";

export default class Skill {
  name: string;
  power: number;
  description: string;

  constructor(name: string, power: number, description: string) {
    this.name = name;
    this.power = power;
    this.description = description;
  }

  useSkill() {
    // Implement skill usage logic here
    // Example: this.power -= 10;
  }
}
