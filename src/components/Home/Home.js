import React from "react";
import RoadMap from "components/RoadMap/RoadMap";
import GameLobby from "components/GameLobby/GameLobby";

function Home() {
  return (
    <div className="AppMain__wrapper">
      <div className="AppMain__roadMap">
        <RoadMap />
      </div>
      <div className="AppMain__gamerLobby">
        <GameLobby />
      </div>
    </div>
  );
}

export default Home;
