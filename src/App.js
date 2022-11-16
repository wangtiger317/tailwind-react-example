import Footer from "./component/Footer";
import Home from "./component/Home";
import Mints from "./component/Mints";
import Navbar from "./component/Navbar";
import RoadMap from "./component/RoadMap";
import Traits from "./component/Traits";

function App() {
  return (
    <div className="App text-2xl">
      <Navbar />
      <Home />
      <Mints />
      <Traits />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
