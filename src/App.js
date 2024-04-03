import "./App.css";
import CakeGallery from "./Components/CakeGallery";
import ClassComponent from "./Components/ClassComponent";
import Home from "./Components/Home";

function App() {
  let fname = "Deepika";
  let age = 25;
  let place = "Hyderabad";

  let person = {
    firstname: "Mounika",
    age: 25,
    location: "Pune",
  };
  let person1 = {
    firstname: "Sindhu",
    age: 26,
    location: "Chennai",
  };
  return (
    <div className="App">
      <h1>ReactJS Learning</h1>
      <p>My name is {fname}</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Home
          person={person}
          firstname={fname}
          age={age}
          place={place}
          designation="SE"
        />
        <Home
          person={person1}
          firstname="Sindhu"
          age={26}
          place="Bangalore"
          designation="ASE"
        />
      </div>
      <ClassComponent firstname={fname} />
      <CakeGallery />
    </div>
  );
}

export default App;