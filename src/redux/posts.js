import { createAction, handleActions } from 'redux-actions'

// ACTIONS
const POST_ADD_ACTION = 'POSTS/ADD';
const POST_CLEAR_ACTION = 'POSTS/CLEAR';
const POST_REMOVE_ACTION = 'POSTS/REMOVE';

export const addPostAction = createAction(POST_ADD_ACTION, (description) => ({
  description
}));
export const clearPostAction = createAction(POST_CLEAR_ACTION);
export const removePostAction = createAction(POST_REMOVE_ACTION);

// REDUCERS
// const postsHandler = (state = [], action) => {
//   switch (action.type) {
//     case 'POSTS/ADD':
//       // faça algo
//       return [
//         ...state,
//         action.payload
//       ];
//     default:
//       return state;
//   }
// }
const postsHandler = handleActions({
  [POST_ADD_ACTION]: (state, action) => {
    return [
      ...state,
      action.payload
    ];
  },
  [POST_CLEAR_ACTION]: () => {
    return [];
  },
  [POST_REMOVE_ACTION]: (state, action) => {
    const newState = [...state];
    newState.splice(action.payload, 1);
    return newState;
  }
}, [])

export const reducers = {
  posts: postsHandler,
}