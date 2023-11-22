import { MouseEvent } from "react";
import PlayerModel from "../models/Player";

interface PlayerProps {
  player: PlayerModel;
  onClick: (player: PlayerModel) => void;
  selected: boolean;
}

const Player: React.FC<PlayerProps> = ({ player, onClick, selected }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onClick(player);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: selected ? "lightblue" : "white" }}
    >
      <h3>{player.name}</h3>
      <p>Units: {player.units}</p>
      <p>Controlled Territories: {player.territories.length}</p>
    </div>
  );
};

export default Player;
