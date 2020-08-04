import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RoadMap from "./components/RoadMap/RoadMap";
import GameLobby from "./components/GameLobby/GameLobby";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppMain__wrapper">
        <div className="AppMain__roadMap">
          <RoadMap />
        </div>
        <div className="AppMain__gamerLobby">
            <GameLobby />
        </div>
         
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
