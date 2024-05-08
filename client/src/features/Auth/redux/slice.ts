// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
// type
import type { PayloadAction } from '@reduxjs/toolkit';

// Define types for auth state
export interface AuthState {

  isAuthenticated: boolean;

  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Define reducers

const reducers = {

  setAuthenticated(state: AuthState, action: PayloadAction<boolean>) {
    state.isAuthenticated = action.payload;
  },

  setUser(state: AuthState, action: PayloadAction<{ id: string; name: string; email: string } | null>) {
    state.user = action.payload;
  },


}

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    ...reducers,

  },
});

export default authSlice.reducer;
export const { actions } = authSlice;
