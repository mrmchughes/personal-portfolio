import Toolbox from "./components/Toolbox";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Previous_Work from "./components/Previous_Work";

function App() {
  return (
    <div className="App font-serif">
      <NavBar />

      <Intro />

      <Toolbox />

      <Previous_Work />

      <Footer />
    </div>
  );
}

export default App;
