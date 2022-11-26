import React from "react";
import "./App.css";
import Athlete from "./Athlete";
import MoneyForm from "./MoneyForm";
import Roster from "./Roster";
import { TeamStoreProvider } from "./TeamStore";

const lebronJames = new Athlete("Lebron James", 37, 9);
const stephCurry = new Athlete("Steph Curry", 34, 5);

function getPlayersFromBackend(): Athlete[] {
  return [lebronJames, stephCurry];
}

function App() {
  const players = getPlayersFromBackend();
  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={players}>
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
