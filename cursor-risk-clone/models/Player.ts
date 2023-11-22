import Territory from "./Territory";

class Player {
  name: string;
  units: number;
  territories: Territory[];

  constructor(name: string) {
    this.name = name;
    this.units = 0;
    this.territories = [];
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

  addTerritory(territory: Territory): void {
    this.territories.push(territory);
  }

  removeTerritory(territory: Territory): void {
    const index = this.territories.indexOf(territory);
    if (index > -1) {
      this.territories.splice(index, 1);
    } else {
      throw new Error("Territory not found");
    }
  }
}

export default Player;
