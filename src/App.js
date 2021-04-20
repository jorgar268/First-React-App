import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [habits, setHabits] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{habits.length} Malos hábitos a eliminar :</h2>
        <List habits={habits} />
        <button onClick={() => setHabits([])}>eliminar todos</button>
      </section>
    </main>
  );
}

export default App;
