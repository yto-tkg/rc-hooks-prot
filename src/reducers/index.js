import { combineReducers } from "redux";
import events from "./events";
import opereationLogs from "./operationLogs";

export default combineReducers({ events, opereationLogs });
