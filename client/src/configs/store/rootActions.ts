// type
import type { SliceActions } from '~helpers/configureStore';

// feature redux
import * as auth from '~features/Auth/redux';

const rootActions = {
 
  ...auth.actions,
};

export type RootActionType = SliceActions<typeof rootActions>;

export default rootActions;
