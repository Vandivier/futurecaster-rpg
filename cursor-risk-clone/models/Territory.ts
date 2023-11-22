import Player from "./Player";

class Territory {
  name: string;
  owner: Player | null;
  units: number;

  constructor(name: string) {
    this.name = name;
    this.owner = null;
    this.units = 0;
  }

  setOwner(player: Player): void {
    this.owner = player;
  }

  removeOwner(): void {
    this.owner = null;
  }

  addUnits(units: number): void {
    this.units += units;
  }

  removeUnits(units: number): void {
    if (this.units >= units) {
      this.units -= units;
    } else {
      throw new Error("Not enough units to remove");
    }
  }
}

export default Territory;
