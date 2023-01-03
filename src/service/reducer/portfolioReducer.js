import portfolioInitState from "../state/portfolioState";

const portfolioReducer = (state = portfolioInitState, action) => {
  switch (action.type) {
    case "updateExperienceLists":
      return { ...state, ...action.value };
    case "updateProjects":
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export default portfolioReducer;
