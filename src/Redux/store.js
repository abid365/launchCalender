import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './features/dateSlice/dateSlice'

export const store = configureStore({
  reducer: {
    dateManage:dateSlice,
  },
})