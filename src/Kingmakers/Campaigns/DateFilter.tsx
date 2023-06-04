import * as React from 'react'
import { 
  Box,
} from "@mui/material"
import { 
  Icon,
  Font,
  usePwaDispatch,
  updateSearchStr,
} from ".."

export default function DateFilter() {
  const dispatch = usePwaDispatch()

  return (
    <Box sx={{border: "1px solid red"}}>
      DateFilter
    </Box>
  )
}



{/* <Box>
                      <DatePicker 
                        label="From"
                        format="DD/MM/YYYY"
                        value={fromTime ? dayjs(fromTime) : null}
                        onChange={(v:any) => {
                          dispatch(updateFromTime(moment(v).valueOf()))
                        }}
                      />
                    </Box>
                    <Box sx={{ml:1}}>
                        <DatePicker
                          label="To"
                          format="DD/MM/YYYY"
                          value={toTime ? dayjs(toTime) : null}
                          onChange={(v:any) => {
                            dispatch(updateToTime(moment(v).valueOf()))
                          }}
                        />
                    </Box> */}