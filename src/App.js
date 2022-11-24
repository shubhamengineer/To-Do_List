import React, { useState } from "react";
import { ToDoList } from "./component/ToDoList";

const App = () => {

  const [inputlist, setInputList] = useState("");
  const [item, setItem] = useState([]);


  const itemevent = (event) => {
    setInputList(event.target.value);
  };

  const listofitem = () => {
    setItem((olditems) => {
      return [...olditems, inputlist];
    });
    setInputList("");
  };



  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do List</h1>
          <br />
          <input type="text" placeholder="Add a Item"
            value={inputlist}
            onChange={itemevent} />
          <button onClick={listofitem}>+</button>


          <ol>
            {/* <li> {inputlist}</li> */}

            {item.map((itemvalue, index) => {
              return <ToDoList key={index} text={itemvalue} />
            })}

          </ol>
        </div>

      </div>



    </>
  );
}



export default App;