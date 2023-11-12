import "phaser";
import BootScene from "./scenes/BootScene";
import WorldScene from "./scenes/WorldScene";
import DungeonScene from "./scenes/DungeonScene";
import BattleScene from "./scenes/BattleScene";
import SupabaseService from "./services/SupabaseService";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [BootScene, WorldScene, DungeonScene, BattleScene],
  parent: "content",
  backgroundColor: "#000000",
};

window.onload = () => {
  const game = new Phaser.Game(config);
  const supabaseService = new SupabaseService();
  game.registry.set("supabase", supabaseService);
};
