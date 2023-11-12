import Phaser from "phaser";

export default class Race {
  name: string;
  description: string;
  skills: string[];

  constructor(name: string, description: string, skills: string[]) {
    this.name = name;
    this.description = description;
    this.skills = skills;
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
}
