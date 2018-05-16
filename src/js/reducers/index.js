import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  clients: [],
};

const rootReducer = (state = initialState, action ) => {
  //Create global index for correct working search, and delete
      state.clients.filter((client, index) => {
        console.log(index);
        client.globalIndex = index;
      });   
  //Delete the user by his global index
    state.deleteUser = function(action) {
      console.log(action);
      state.clients.splice(action, 1);
          state.clients.map((client, index) => {
            console.log(index);
            client.globalIndex = index;
          });
        }

  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;