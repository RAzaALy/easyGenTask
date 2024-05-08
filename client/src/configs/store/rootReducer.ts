// feature redux
import * as auth from '~features/Auth/redux';

const rootReducer = {
  auth: auth.reducer
};

export type RootReducerType = typeof rootReducer;

export default rootReducer;
