import "./App.css";

import jsonData from "./data/characters.json";
import type { Character } from "./types";

const data: Character[] = jsonData as Character[];

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
