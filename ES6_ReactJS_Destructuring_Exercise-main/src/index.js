// CHALLENGE: uncomment the code below and see the car stats rendered
/* import animals, { useAnimals } from "./data"; */
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(honda);
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = honda;

/* const [cat, dog] = animals;

const { name: catName, sound: catSound } = cat;
console.log(catSound);

console.log(useAnimals(cat));

const {
  feedingRequirments: { food, water },
} = cat;

const { name = "Fluffy", sound = "Purr" } = cat;
 */
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
