import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#333", fontFamily:"sans-serif"}}>
      <div className="container">
        <div>
          <div className="square">
            <div
              className="line top"
              style={{ backgroundColor: "#f9a23e" }}
            ></div>
            <div
              className="line right"
              style={{ backgroundColor: "#b3d4fc" }}
            ></div>
            <div
              className="line bottom"
              style={{ backgroundColor: "#d18ac0" }}
            ></div>
            <div
              className="line left"
              style={{ backgroundColor: "#94d3a2" }}
            ></div>
            <div className="center">
              <h1 className="title" style={{ fontSize: "3em" }}>
                HTML<span style={{ color: "orange" }}>&</span>CSS
              </h1>
              <p className="subtitle" style={{ color: "white" }}>
                design and build websites
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="author"
        style={{
          backgroundColor: "#333",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        JOIN DUCKET
      </h1>
    </div>
  );
}

export default App;