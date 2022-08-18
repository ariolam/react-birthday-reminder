import React, { useState } from "react";
import List from "./List";
import data from "./data";

import "./App.css";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <main>
        <section className="container">
          <h1 className="text-center"> {people.length} bithdays today </h1>
          <List people={people} />
          <button onClick={() => setPeople([])}> Clear All</button>
        </section>
      </main>
    </div>
  );
}
