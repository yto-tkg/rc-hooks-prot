import { useEffect, useReducer, useState } from "react";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers/index";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";

const App = (props) => {
  const appState = localStorage.getItem("appWithRedux");
  const initialState = !!appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("appWithRedux", JSON.stringify(state));
  }, [state]);

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
