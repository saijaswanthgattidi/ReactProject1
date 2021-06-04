import "./App.css";
import React, { useState } from "react";

function App() {
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const [fvdata, setFvdata] = useState("");
  const [validStatus, setValidStatus] = useState(false);

  const [employeeNames, setEmployeeNames] = useState(["A", "B"]);

  const [item, setItem] = useState("");

  const obj = [
    { name: "A", age: 20 },
    { name: "B", age: 20 },
  ];

  // let fruitsVeggies = [
  //   { name: "Apple", type: "fruit" },
  //   { name: "Brinjal", type: "vegetable" },
  //   { name: "Banana", type: "fruit" },
  //   { name: "Beans", type: "vegetable" },
  // ];
  const [fruitsVeggies, setFruitsVeggies] = useState([
    { name: "Apple", type: "fruit" },
    { name: "Brinjal", type: "vegetable" },
    { name: "Banana", type: "fruit" },
    { name: "Beans", type: "vegetable" },
  ]);

  const [selectedType, setSelectedType] = useState("fruit");

  const validate = () => {
    if (userName === "admin" && password === "admin") {
      setValidStatus(true);
    } else {
      setuserName("Admin Fail");
      setpassword("Password Fail");
    }
  };

  const addToList = () => {
    let temp = [...employeeNames];
    if (temp.indexOf(item) === -1) {
      temp.unshift(item);
      setEmployeeNames(temp);
      setItem("");
    } else {
      alert("Element with same exists");
      setItem("");
    }
  };

  return (
    <div className="App">
      <h1> Login</h1>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setuserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button onClick={() => validate()}>Login</button>
      <h3>{userName}</h3>
      <h3>{password}</h3>
      <h3>{validStatus && "Login Successful"}</h3>

      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={addToList}>ADD to List</button>

      <ul>
        {employeeNames.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
      {console.log(obj[1].name)}
      {
        // Try to create a dropdown, fruits and vegetables
        // [] // both fruit names and veggies names
        //
      }
      <input value={fvdata} onChange={(e) => setFvdata(e.target.value)} />
      <select onChange={(e) => setSelectedType(e.target.value)}>
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
      </select>
      <button
        onClick={() => {
          setFruitsVeggies([
            ...fruitsVeggies,
            {
              name: fvdata,
              type: selectedType,
            },
          ]);
        }}
      >
        AddToList
      </button>
      <ol>
        {fruitsVeggies
          .filter((v) => v.type === selectedType)
          .map((v) => {
            return <li key={v.name}>{v.name}</li>;
          })}
      </ol>
    </div>
  );
}

// class App extends Component {
//   constructor (){
//     super();
//     this.state = {
//       name : 'kohli',
//       age : 22,
//       zip : 1

//     }
//     this.incAge = this.incAge.bind(this);
//   }

//   incAge() {
//     let temp = this.state.age;
//     temp = temp + 1;
//     this.setState({age:temp})
//   }

//   incZip = () => {
//     let temp = this.state.zip;
//     temp = temp + 1;
//     this.setState({zip:temp})
//   }

//   render(){
//     return(
//       <div className='App'>
//         <h1>Class parent page</h1>

//         <p>{this.state.name}</p>

//         <p>{this.state.age}</p>
//         <button onClick = {this.incAge}>Incage</button>

//         <p>{this.state.zip}</p>
//         <button onClick = {this.incZip}>Inczip</button>
//       </div>
//     )
//   }
// }

export default App;
