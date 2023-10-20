import "./App.css";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex w-full">
      <div className=""> <Sidebar /> </div>
      <div className="w-full"> <MainContent /> </div>
    </div>
  );
}

export default App;
