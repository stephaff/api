const { createStore } = require("redux");
const { rootReducer } = require("../reducers/rootReducer");

export const store = createStore(rootReducer)