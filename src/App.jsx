// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import MainContent from "./component/MainContent";

const users = [
  {
    userName: "habtamu",
    followers: 200,
    following: 300,
    location: "BahirDar",
    img: "/asset/hub.jpg",
    repositories: [
      {
        name: "smart acess",
        descrption: "degital library for high school",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "Natures",
        descrption: "Tourism",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "banking website",
        descrption: "commersial website for banks",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "coffeListing",
        descrption: "list the coffee in thier property",
        nesting: 43,
        child: 22,
        stars: 400,
      },
    ],
  },
  {
    userName: "getch",
    followers: 400,
    following: 600,
    location: "BahirDar",
    repositories: [
      {
        name: "smart acess",
        descrption: "degital library for high school",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "Natures",
        descrption: "Tourism",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "banking website",
        descrption: "commersial website for banks",
        nesting: 43,
        child: 22,
        stars: 400,
      },
      {
        name: "coffeListing",
        descrption: "list the coffee in thier property",
        nesting: 43,
        child: 22,
        stars: 400,
      },
    ],
  },
];

function App() {
  const [query, setQuery] = useState("");
  function handleInput(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Banner handleInput={handleInput} query={query} />
      <MainContent users={users} query={query} />
    </div>
  );
}
function Banner({ handleInput, query }) {
  return (
    <div className="banner">
      <div className="input_section">
        <input
          type="text"
          className="serch_input"
          value={query}
          onChange={(e) => handleInput(e)}
        />
        <img src="/asset/Search.svg" className="search_icon" />
      </div>
    </div>
  );
}
export default App;
