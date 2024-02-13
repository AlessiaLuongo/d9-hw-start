import { ADD_TO_FAV, REMOVE_FROM_FAVS } from "../actions";

const initialState = {
  list: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,

        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVS:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};
export default FavouriteReducer;
