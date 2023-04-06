import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Event from "./Event";

const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
