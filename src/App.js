import { useState, useEffect } from "react";
import "./App.css";
import { SpinnerDiamond } from "spinners-react";
import Users from "./Users";
import Stopwatch from "./Stopwatch";

function App() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  function showUser() {
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        fetch("https://api.github.com/users/OlenaKut")
          .then((response) => response.json())
          .then((response) => setData(response))
          .then(() => setLoad(false))
          .catch(setError);
      }, 3000);
    }, []);

    if (error) {
      return <h1>Error!</h1>;
    }

    if (load) {
      return (
        <div className="App">
          <SpinnerDiamond size="300px" speed="50" сolor="#a12828" />
        </div>
      );
    } else if (data) {
      console.log(data);
      return (
        <div className="App">
          <Users name={data.login} avatar={data.avatar_url} />
        </div>
      );
    } else {
      return "Lol";
    }
  }

  return (
    <div className="App">
      <Stopwatch />
      <h1 onClick={showUser}>Hello</h1>
    </div>
  );
}
export default App;
