import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: '',
  error: null,
};

export const userReducer = createReducer(initialState, {
  loginRequest: state => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.msg;
  },
  loginFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

  registerRequest: state => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.success;
  },
  registerFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateUserData: (state, action) => {
    state.user = action.payload;
  },
  logoutRequest: state => {
    state.loading = true;
  },
  logoutSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.message = action.payload;
  },
  logoutFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  },
  clearError: state => {
    state.loading = false;
    state.error = null;
  },
  clearMessage: state => {
    state.loading = false;
    state.message = null;
  },
});
