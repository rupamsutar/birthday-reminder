import { useState } from "react";
import data from "./data"
import List from "./List";

const App = () => {
  const [people, setPeople] =  useState(data);

  console.log(people)

  return(
    <main>
      <h3>{people.length} Birthdays today !</h3>
      <List people={people} />
    </main>
  )
};
export default App;
