import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <table style={{ backgroundColor: "grey" }}>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
