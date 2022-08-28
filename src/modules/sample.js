import {handleActions} from 'redux-actions';
import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = id => async dispatch => {
    dispatch({type: GET_POST}); // 요청 시작한 것을 알림
    try {
        const response = await api.getPost(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        });
    } catch(e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e;    // 컴포넌트단에서 에러 조회 가능
    }
}

export const getUsers = () => async dispatch => {
    dispatch({type: GET_USERS}); // 요청 시작한 것을 알림
    try {
        const response = await api.getUsers();
        console.log('response >> ', response);
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        });
    } catch(e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        });
        throw e;    // 컴포넌트단에서 에러 조회 가능
    }
}

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
}

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            }
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            },
            post: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            }
        })
    },
    initialState
);

export default sample;