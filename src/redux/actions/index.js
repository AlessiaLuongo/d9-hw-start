export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const SEARCH = "SEARCH";

export const fetchOnJobs = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SEARCH,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
