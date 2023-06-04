import { setPwaKey } from "../.."

export const updateToDate =
  (toDate: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "toDate", value: toDate }))
    } catch (error: any) {
      console.log("Action error: updateToDate", error)
    }
  }
