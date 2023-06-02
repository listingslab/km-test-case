import { setPwaKey } from "../.."

export const updateFromTime =
  (fromTime: number): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "fromTime", value: fromTime }))
    } catch (error: any) {
      console.log("Action error: updateFromTime", error)
    }
  }
