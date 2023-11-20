import { render } from "@testing-library/react";
import "./App.css";
import Greeting from "./Greeting";
import Superhero from "./Superhero"

const superheroes = [
  {
    name: "Batman",
    image: "https://cdn.mos.cms.futurecdn.net/RA3N4dsSnQShouiisqEwsR.jpg",
    group: "DC"
  },
  {
    name: "Superman",
    image: "https://i.redd.it/mojy3m24d1b31.jpg",
    group: "DC"
  },
  {
    name: "Wonder Woman",
    image: "https://photos.costume-works.com/full/wonder_woman66.jpg",
    group: "DC"
  },
  {
    name: "Ant-Man",
    image: "https://i.ytimg.com/vi/A3lcETQrV9o/hqdefault.jpg",
    group: "Marvel"
  },
  {
    name: "Omni Man",
    image: "https://img-9gag-fun.9cache.com/photo/aDd6OP9_460s.jpg",
    group: "DC"
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
  })

  console.log(renderHeroes)

  return (
  <div className="App">
    <h1>{greeting}</h1>
    {/* <Greeting></Greeting> */}
    <Greeting greeting={greeting} number={9083013}/>
    <Greeting greeting="Have a nice day!"/>

    {renderHeroes}
  </div>
  )
}

export default App;