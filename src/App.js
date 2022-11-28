import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputData] = useState({ name: "", rollNo: "" });

  function handleChange(e) {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setInputarr([...inputarr, { ...inputdata }]);
    setInputData({ name: "", rollNo: "" });
  }
  return (
    <>
      <div className="App">
        <input
          type="text"
          autoComplete="off"
          name="name"
          value={inputdata.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          autoComplete="off"
          name="rollNo"
          value={inputdata.rollNo}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Add</button>
        <div>
          <table border={1} width="30%" cellPadding={10}>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
            </tr>
            <tr>
              {inputarr.map((info, ind) => {
                return (
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                  </tr>
                );
              })}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
