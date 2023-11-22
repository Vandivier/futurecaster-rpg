import { useState } from "react";
import Territory from "./Territory";
import Player from "../models/Player";
import TerritoryModel from "../models/Territory";
import { endTurn } from "../utils/gameLogic";

interface GameBoardProps {
  players: Player[];
  territories: TerritoryModel[];
  currentPlayer: Player | null;
  onEndTurn: (nextPlayer: Player) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  players,
  territories,
  currentPlayer,
  onEndTurn,
}) => {
  const [selectedTerritory, setSelectedTerritory] =
    useState<TerritoryModel | null>(null);

  const handleTerritoryClick = (territory: TerritoryModel) => {
    setSelectedTerritory(territory);
  };

  const handleEndTurnClick = () => {
    const nextPlayer = endTurn(currentPlayer, players);
    onEndTurn(nextPlayer);
  };

  return (
    <div>
      <h2>Current Player: {currentPlayer?.name}</h2>
      <div>
        {territories.map((territory) => (
          <Territory
            key={territory.id}
            territory={territory}
            onClick={handleTerritoryClick}
            selected={selectedTerritory === territory}
          />
        ))}
      </div>
      <button onClick={handleEndTurnClick}>End Turn</button>
    </div>
  );
};

export default GameBoard;
