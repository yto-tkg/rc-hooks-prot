import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import OperationLog from "./OperationLog";

const OperationLogs = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table>
        <thead></thead>
        <tbody>
          {state.operationLogs.map((log, index) => (
            <OperationLog key={index} log={log} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
