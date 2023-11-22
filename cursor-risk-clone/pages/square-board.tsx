import { useState, useEffect } from "react";
import Link from "next/link";
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
      <h1>Square Game Board</h1>
      <Link href="/hex-board">Go to Hex Board</Link>
      <GameBoard
        players={players}
        territories={territories}
        currentPlayer={currentPlayer}
        onEndTurn={(nextPlayer) => setCurrentPlayer(nextPlayer)}
      />
    </div>
  );
}
