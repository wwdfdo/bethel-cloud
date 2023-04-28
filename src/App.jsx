import "./App.css";
import BethelCloud from "./components/BethelCloud/BethelCloud";
import BethelLeftSideBar from "./components/BethelLeftSideBar/BethelLeftSideBar";
import BethelMainDashBoard from "./components/BethelMainDashBoard/BethelMainDashBoard";

function App() {
  return (
    <div className="container">
      <BethelLeftSideBar />
      <BethelCloud />
      <BethelMainDashBoard />
    </div>
  );
}

export default App;
