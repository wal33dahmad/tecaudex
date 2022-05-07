import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
// import Planets from "./Components/Planets";

function App() {
  return (
    <div className="App">
      <div className="backGround">
        <Navbar />
        <Hero />
      </div>
      {/* <Planets />
      <h1>Footer</h1> */}
    </div>
  );
}

export default App;
