import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../contexts/AppContext";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { state, dispatch } = useContext(AppContext);

  const addEvent = (e) => {
    e.prventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });
    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.prventDefault();
    dispatch({ type: "DELETE_ALL_EVENT" });
  };

  return (
    <>
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
          <button
            onClick={addEvent}
            disabled={!!title && !!body ? false : true}
          >
            イベント作成
          </button>
          <button
            onClick={deleteAllEvent}
            disabled={state.length === 0 ? true : false}
          >
            すべてのイベントを削除
          </button>
        </div>
      </form>
    </>
  );
};

export default EventForm;
