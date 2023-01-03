import appInitState from "../state/appState";

const appReducer = (state = appInitState, action) => {
  switch (action.type) {
    case "setPortfolioModal":
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export default appReducer;
