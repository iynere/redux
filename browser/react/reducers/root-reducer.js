import {SET_LYRIC} from '../constants';

const initialState = {text: ''};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LYRIC: 
       return Object.assign({}, state, {
       	text: action.lyric
       });
    default: 
       return state;
  }
}

// Two things to note: 
//   1. We use Object.assign to maintain immutability.
//      Since our state only has one key on it, it doesn't matter much, but what if we added more?
//   2. If we receive an action that doesn't have a type we recognize, we return the previous state