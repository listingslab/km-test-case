import { setPwaKey } from "../.."

export const updateToTime =
  (toTime: number): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "toTime", value: toTime }))
    } catch (error: any) {
      console.log("Action error: updateToTime", error)
    }
  }
