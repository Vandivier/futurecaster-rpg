// TODO: import and use Phaser for:
//  - sounds and animations
//  - metagame changes, scenes, terraforming, etc
// import Phaser from "phaser";

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
    throw new Error("Method 'useSkill' must be implemented.");
  }
}

export class AttackSkill extends Skill {
  constructor() {
    super("Attack", 50, "A powerful attack.");
  }

  useSkill() {
    // Implement attack logic here
  }
}

export class DefendSkill extends Skill {
  constructor() {
    super("Defend", 20, "A strong defense.");
  }

  useSkill() {
    // Implement defend logic here
  }
}

export class SleepSkill extends Skill {
  constructor() {
    super("Sleep", 30, "A spell that puts the enemy to sleep.");
  }

  useSkill() {
    // Implement sleep spell logic here
  }
}
