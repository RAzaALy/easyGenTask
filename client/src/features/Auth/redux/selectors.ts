// store
import type { StateType } from '~configs/store';

export const getAuthenticated = (state: StateType) => state.auth.isAuthenticated;
export const getUser = (state: StateType) => state.auth.user;
