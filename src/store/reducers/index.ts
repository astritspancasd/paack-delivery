import { combineReducers } from 'redux';
import { deliveriesReducer } from './deliveriesReducer';
import { deliveryReducer } from './deliveryReducer';

export const rootReducer = combineReducers({
  deliveries: deliveriesReducer,
  delivery: deliveryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
