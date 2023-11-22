import { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import Player from "../models/Player";
import Territory from "../models/Territory";
import { initializeGame } from "../utils/gameLogic";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [territories, setTerritories] = useState<Territory[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  // Initialize the game when the component mounts
  useEffect(() => {
    const { players, territories } = initializeGame();
    setPlayers(players);
    setTerritories(territories);
    setCurrentPlayer(players[0]);
  }, []);

  return (
    <div>
      <h1>Risk Board Game</h1>
      <GameBoard
        players={players}
        territories={territories}
        currentPlayer={currentPlayer}
        onEndTurn={(nextPlayer) => setCurrentPlayer(nextPlayer)}
      />
    </div>
  );
}
