import { MouseEvent } from "react";
import TerritoryModel from "../models/Territory";

interface TerritoryProps {
  territory: TerritoryModel;
  onClick: (territory: TerritoryModel) => void;
  selected: boolean;
}

const Territory: React.FC<TerritoryProps> = ({
  territory,
  onClick,
  selected,
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onClick(territory);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: selected ? "lightblue" : "white" }}
    >
      <h3>{territory.name}</h3>
      <p>Owner: {territory.owner?.name}</p>
      <p>Troops: {territory.troops}</p>
    </div>
  );
};

export default Territory;
