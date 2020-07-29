import {FETCH_POSTS, NEW_POST } from '../actions/types';
import { bindActionCreators } from 'redux';

const inititalState = {
  items: [],
  item: {}
}

export default function(state = inititalState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
      
  }
}