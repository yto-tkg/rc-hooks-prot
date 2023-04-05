import Event from "./Event";

const Events = ({ state, dispatch }) => {
  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
