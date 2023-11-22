import Player from "../models/Player";
import Territory from "../models/Territory";

export function endTurn(
  currentPlayer: Player | null,
  players: Player[]
): Player {
  const currentIndex = players.indexOf(currentPlayer as Player);
  const nextIndex = (currentIndex + 1) % players.length;
  return players[nextIndex];
}

export function rollDice(numDice: number): number[] {
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolls;
}

export function conductBattle(
  attacker: Player,
  defender: Player,
  attackingTerritory: Territory,
  defendingTerritory: Territory
): void {
  const attackerDice = rollDice(attackingTerritory.units);
  const defenderDice = rollDice(defendingTerritory.units);

  attackerDice.sort((a, b) => b - a);
  defenderDice.sort((a, b) => b - a);

  for (let i = 0; i < Math.min(attackerDice.length, defenderDice.length); i++) {
    if (attackerDice[i] > defenderDice[i]) {
      defendingTerritory.removeUnits(1);
      if (defendingTerritory.units === 0) {
        defender.removeTerritory(defendingTerritory);
        attacker.addTerritory(defendingTerritory);
        defendingTerritory.setOwner(attacker);
      }
    } else {
      attackingTerritory.removeUnits(1);
      if (attackingTerritory.units === 0) {
        attacker.removeTerritory(attackingTerritory);
        defender.addTerritory(attackingTerritory);
        attackingTerritory.setOwner(defender);
      }
    }
  }
}

export function checkWinCondition(players: Player[]): Player | null {
  for (let player of players) {
    if (player.territories.length === 42) {
      // Assuming the standard Risk board with 42 territories
      return player;
    }
  }
  return null;
}

export function distributeUnits(players: Player[]): void {
  for (let player of players) {
    const bonusUnits = Math.floor(player.territories.length / 3);
    player.addUnits(bonusUnits + 3); // Each player gets at least 3 units per turn
  }
}

export function initializeGame(): {
  players: Player[];
  territories: Territory[];
} {
  // Initialize players
  const players = [new Player("Player 1"), new Player("Player 2")]; // Add more players as needed

  // Initialize territories
  const territories: Territory[] = []; // Populate with Territory instances as required

  // Additional game setup logic goes here...

  return { players, territories };
}
