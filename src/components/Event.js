const Event = ({ dispatch, event }) => {
  const deleteEvent = () => {
    dispatch({ type: "DELETE_EVENT", id: event.id });
  };
  return (
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
  );
};

export default Event;
