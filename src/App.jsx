import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Switch from "./components/Switch";
import SwitchOff from "./components/SwitchOff";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>

        <main>
          <div>
            <SwitchOff />
            <Switch switch={switch1} setSwitch={setSwitch1} />
            <Switch switch={switch2} setSwitch={setSwitch2} />
            <Switch switch={switch3} setSwitch={setSwitch3} />
          </div>

          <div>
            {switch1 + switch2 + switch3 === 3 ? (
              <button
                onClick={() => {
                  alert("Décollage !");
                }}
                className="result"
                style={{ backgroundColor: "green" }}
              >
                GO !
              </button>
            ) : (
              <p className="result"> NO WAY !</p>
            )}
          </div>
        </main>
        <footer>
          <p>
            Made with <span>React</span> at <span>Le Reacteur</span> by
            <span> Laguna</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
