import {FETCH_POSTS, NEW_POSTS } from '../actions/types';
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
      }
    default:
      return state;
      
  }
}