const opereationLogs = (state = [], action) => {
  switch (action.type) {
    case "ADD_OPERATION_LOG":
        const operationLog = { 
            action.description,
            action.operatedAt 
        }
      return [operationLog, ...state];
    case "DELETE_ALL_OPERATION_LOG":
      return [];
    default:
      return state;
  }
};

export default opereationLogs;
