import { configureStore } from '@reduxjs/toolkit'
import { user } from './User/User.store'

export const store = configureStore({
    reducer: {
        [user.reducerPath]: user.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(user.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>