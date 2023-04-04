import { useEffect, useReducer, useState } from "react";
import reducer from "../reducers";
import Event from "./Event";

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.prventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div>
        <form>
          <div>
            <label></label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <input
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></input>
            <button onClick={() => addEvent()}>イベント作成</button>
            <button>すべてのイベントを削除</button>
          </div>
        </form>
        <table>
          <thead></thead>
          <tbody>
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
