import "./App.css";
import BethelCloud from "./components/BethelCloud/BethelCloud";
import BethelLeftSideBar from "./components/BethelLeftSideBar/BethelLeftSideBar";
import BethelMainDashBoard from "./components/BethelMainDashBoard/BethelMainDashBoard";
import BethelRightSideBar from "./components/BethelRightSideBar/BethelRightSideBar";

function App() {
  return (
    <div className="container">
      <BethelLeftSideBar />
      <BethelCloud />
      <BethelMainDashBoard />
      <BethelRightSideBar />
    </div>
  );
}

export default App;
