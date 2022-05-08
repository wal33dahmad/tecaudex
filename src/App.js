import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Planets from "./Components/Planets";
// import Planets from "./Components/Planets";

function App() {
  return (
    <div className="App">
      <div className="backGround">
        <div style={{'background':'linear-gradient(180deg, #ffffff 0%, #090707 100%)'}}>
          <Navbar />
          <Hero />
        </div>
        <Planets />
        <Footer />
      </div>
      {/* <Planets />
      <h1>Footer</h1> */}
    </div>
  );
}

export default App;
