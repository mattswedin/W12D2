import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (user) => (dispatch) => {
    return SessionApiUtil.login(user)
        .then(user => {
            return dispatch(receiveCurrentUser(user))
        }, err => {
            return dispatch(receiveErrors(err))
        })
};

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout()
    .then(() => {
        return dispatch(logoutCurrentUser())
    })
};

export const signup = (user) => (dispatch) => {
    return SessionApiUtil.signup(user)
        .then(user => {
            return dispatch(receiveCurrentUser(user))
        }, err => {
            return dispatch(receiveErrors(err))
        })
};






