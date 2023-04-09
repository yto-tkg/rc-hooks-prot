import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const deleteEvent = () => {
    dispatch({ type: "DELETE_EVENT", id: event.id });
    dispatch({
      type: "ADD_OPERATION_LOG",
      description: `${event.id}のイベントを削除`,
      operatedAt: timeCurrentIso8601(),
    });
  };
  return (
    <>
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button type="button" onClick={() => deleteEvent}>
            削除
          </button>
        </td>
      </tr>
    </>
  );
};

export default Event;
