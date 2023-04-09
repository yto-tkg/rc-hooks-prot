import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { state, dispatch } = useContext(AppContext);

  const addEvent = (e) => {
    e.prventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });

    dispatch({
      type: "ADD_OPERATION_LOG",
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601(),
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.prventDefault();
    dispatch({ type: "DELETE_ALL_EVENT" });
    dispatch({
      type: "DELETE_ALL_OPERATION_LOG",
      description: "すべてのイベントを削除しました",
      operatedAt: timeCurrentIso8601(),
    });
  };

  const deleteAllOperationLogs = (e) => {
    e.prventDefault();
    dispatch({
      type: "DELETE_ALL_OPERATION_LOG",
    });
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
            disabled={state.events.length === 0 ? true : false}
          >
            すべてのイベントを削除
          </button>
          <button
            onClick={deleteAllOperationLogs}
            disabled={state.operationLogs.length === 0 ? true : false}
          >
            すべて操作ログを削除
          </button>
        </div>
      </form>
    </>
  );
};

export default EventForm;
