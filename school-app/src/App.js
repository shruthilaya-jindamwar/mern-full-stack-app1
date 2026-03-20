import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr = [
    { name: "student1", age: 20, course: "math" }, //
    { name: "student2", age: 30, course: "social" }, //
  ];

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
            {arr.map((item) => {
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
