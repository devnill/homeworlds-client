
import GameList from "../components/game-list";
import Header from "../components/header";
import MainMenu from "../components/main-menu";

export default function Root() {
  
  return (
    <div>
      <Header />
      <div className="flex">
        <GameList />
        <MainMenu />
      </div>
      </div>
    );
  }
  

