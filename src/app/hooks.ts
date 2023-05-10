import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { RootState, AppDispatch } from './store';

// use throughout you app instead o plain `useDispatch` and `useSelector`

// to dispatch an action (action is an object that hold state)
// send action (new state) to change by reducer (only function can change state of store)
// : dispatch the action to reducers
export const useAppDispatch: () => AppDispatch = useDispatch; //useDispatch<AppDispatch>();


// to select an action (get current state of store)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;





