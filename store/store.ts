import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthSlicers from './slicers/AuthSlicers';
import NewsSlice from './slicers/News';




const store = configureStore({

    reducer: {

        auth: AuthSlicers,

        News: NewsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializbleCheck: false
    }),
});


// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

export default store;