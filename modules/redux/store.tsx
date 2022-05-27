import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'

const store = configureStore({
  reducer: {
    
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store