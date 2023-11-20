import "./App.css";

import Greeting from "./Greeting";
import Superhero from "./Superhero";

const superheroes = [
  {
    name: "Batman",
    image:
      "https://digitalheroes.com/cdn/shop/products/STL153767_1024x1024.jpg?v=1605814705",
    group: "DC Comics",
  },
  {
    name: "Superman",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    group: "DC Comics",
  },
  {
    name: "Wonder Woman",
    image: "https://static.tvtropes.org/pmwiki/pub/images/ww_1.png",
    group: "DC Comics",
  },

  {
    name: "Ant Man",
    image:
      "https://static.wikia.nocookie.net/marveldatabase/images/6/66/Henry_Pym_%28Earth-616%29_from_Avengers_Origins_Ant-Man_%26_the_Wasp_Vol_1_1_001.jpg/revision/latest?cb=20140819221923",
    group: "Marvel",
  },

  {
    name: "Omni Man",
    image:
      "https://media.distractify.com/brand-img/xqcM5sjK-/0x0/omniman-1616790676506.jpg",
    group: "Marvel",
  },
];

function App() {
  const greeting = "Hello World!";
  console.log(greeting);
  const renderHeroes = superheroes.map((superhero) => {
    return (
      <Superhero
        key={superhero.name}
        name={superhero.name}
        image={superhero.image}
        group={superhero.group}
      />
    );
  });

  console.log(renderHeroes);
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <Greeting greeting={greeting} number={100} />
      {/* <Greeting /> */}
      <Greeting greeting="Have a nice day!" />
      {renderHeroes}
    </div>
  );
}

export default App;
