import React from "react";
import ReactDOM from "react-dom";
import Geolocation from "react-geolocation";

import "./styles.css";

function App() {
  return (
    <Geolocation
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) => (
        <div>
          <button onClick={getCurrentPosition}>Get Position</button>
          {error && <div>{error.message}</div>}
          <pre>
            latitude: {latitude}
            longitude: {longitude}
          </pre>
        </div>
      )}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
