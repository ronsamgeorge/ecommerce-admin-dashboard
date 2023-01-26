import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">otherpages</div>
      </div>
    </div>
  );
}

export default App;
