import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
