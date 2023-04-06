import { useEffect, useReducer, useState } from "react";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div>
          <EventForm />
          <Events />
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
