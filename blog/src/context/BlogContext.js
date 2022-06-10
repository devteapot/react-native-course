import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS': return payload;
    case 'EDIT_POST': return state.map((bp) => 
      bp.id === payload.id 
        ? payload 
        : bp
    );
    case 'DELETE_POST': return state.filter((bp) => bp.id !== payload);
    default: return state;
  }
};

const getPostsAction = (dispatch) => () =>
  jsonServer
    .get('/blogposts')
    .then((res) => dispatch({ type: 'GET_POSTS', payload: res.data }));

const addPostAction = () => (title, content, onSuccess) => 
  jsonServer
    .post('/blogposts', { title, content })
    .then(() => {
      if (onSuccess) onSuccess();
    })

const editPostAction = (dispatch) => (postId, title, content, onSuccess) => 
    jsonServer
      .put(`/blogposts/${postId}`, { id: postId, title, content })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: 'EDIT_POST', payload: data });
        if (onSuccess) onSuccess();
      });

const deletePostAction = (dispatch) => (postId) =>
  jsonServer
    .delete(`/blogposts/${postId}`)
    .then(() => dispatch({ type: 'DELETE_POST', payload: postId }));

export const { Context, Provider } = createDataContext(
  reducer, 
  { 
    getPostsAction,
    addPostAction,
    editPostAction,
    deletePostAction 
  }, 
  [],
);
