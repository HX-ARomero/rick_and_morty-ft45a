import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

//* allCharacters = [ { Rick, M}, {Morty, M}, {Beth, F}, {Summer, F} ]

//* myFavorites = [ {Beth, F}, {Summer, F} ]
//* => <Favorites /> => <Card />


export default function reducer(state = initialState, { type, payload }) {
  //* action = { type:.., payload:...}
  // const { type, payload } = action;
  switch(type) {
    case ADD_FAV: {
      return { ...state, myFavorites: payload, allCharacters: payload };
    }
    case REMOVE_FAV: {
      // const filteredFavs = state.allCharacters.filter(
      //   favorite => favorite.id !== Number(payload)
      // );
      return { ...state, myFavorites: payload, allCharacters: payload };
    }
    case FILTER:{
      //* { type: FILTER, payload: "FEMALE" }
      if(payload === "All") return {
        ...state,
        myFavorites: state.allCharacters
      }
      const filteredFavs = state.allCharacters.filter(
        char => char.gender === payload
      )
      return {
        ...state,
        myFavorites: filteredFavs
      }
    }
    case ORDER:
      const orderCopy = [...state.myFavorites];
      if(payload === "A")
        orderCopy.sort((a, b) => a.id - b.id);
      if(payload === "D")
        orderCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderCopy
      }
    default:
      return { ...state }
  }
}