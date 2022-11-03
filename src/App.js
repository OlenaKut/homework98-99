import { useState, useEffect } from "react";
import "./App.css";
import { SpinnerDiamond } from "spinners-react";
import Users from "./Users";
import Timer from "react-timer";

function App() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  const OPTIONS = { prefix: "seconds elapsed!", delay: 200 };

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
        <SpinnerDiamond size="200px" speed="50" сolor="#a12828" />
      </div>
    );
  } else if (data) {
    console.log(data);
    return (
      <div className="App container shadow-lg rounded-2 p-2">
        <Users name={data.login} avatar={data.avatar_url} />
        <div className="d-flex justify-content-center line shadow py-4">
          <h6 className="col-3">You are lookig for me </h6>
          <div className="col-6 timer">
            <Timer options={OPTIONS} />
          </div>
          <h6 className="col-3">seconds</h6>
        </div>
      </div>
    );
  } else {
    return "Lol";
  }
}
export default App;
