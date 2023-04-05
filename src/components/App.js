import { useEffect, useReducer, useState } from "react";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
