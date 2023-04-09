import { useEffect, useReducer, useState } from "react";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers/index";
import EventForm from "./EventForm";
import Events from "./Events";

const App = (props) => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div>
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
