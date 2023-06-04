import * as React from 'react'
import { 
  Box,
  Button,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  toggleCalendar,
  updateCalendarMode,
} from ".."

export default function DateFilter(props: any) {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {fromDate, toDate} = pwa
  const {id} = props
  if (id === "f"){
    if (!fromDate) return <Box sx={{m:1}}>
      <Button
        sx={{textTransform: "none"}}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          dispatch(toggleCalendar(true))
          dispatch(updateCalendarMode("from"))
          return null
        }}>
        From Date
      </Button>
    </Box>
  }
  if (id === "t"){
    if (!toDate) return <Box sx={{m:1}}>
    <Button
      sx={{textTransform: "none"}}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(toggleCalendar(true))
        dispatch(updateCalendarMode("to"))
        return null
      }}>
      To Date
    </Button>
  </Box>
  }
  return null
}
