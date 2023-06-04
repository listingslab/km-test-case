import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {
  theme,
} from "../"
import {campaignsData} from "../Campaigns"
const initialState: PwaReduxShape = {
  started: false,
  notifyer: null,
  theme,
  campaigns: campaignsData,
  searchStr: "2021-11-01T22:24:21.086Z",
  fromDate: "2021-11-01T22:24:21.086Z",
  toDate: "2023-04-23T19:30:50.446Z",
}

export const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
