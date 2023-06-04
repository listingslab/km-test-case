import dayjs from "dayjs"
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
  searchStr: "",
  fromDate: dayjs("2023-01-31"),
  toDate: dayjs("2023-06-01"),
}

// dayjs('2019-01-25').unix()

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
