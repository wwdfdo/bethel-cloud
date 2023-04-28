import "./App.css";
import BethelCloud from "./components/BethelCloud/BethelCloud";
import BethelLeftSideBar from "./components/BethelLeftSideBar/BethelLeftSideBar";

function App() {
  return (
    <div className="container">
      <BethelLeftSideBar />
      <BethelCloud />
    </div>
  );
}

export default App;
