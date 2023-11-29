import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

export function addFav(character) { //* { id: 1, name: "Rick"}
  return {
    type: ADD_FAV,
    payload: character
  }
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id
  }
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}