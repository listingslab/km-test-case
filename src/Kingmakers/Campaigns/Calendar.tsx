import * as React from 'react'
import dayjs from "dayjs"
import {
  Dialog,
} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { 
  StaticDatePicker,
} from "@mui/x-date-pickers"
import { 
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  toggleCalendar,
  updateCalendarMode,
} from ".."

export default function Calendar() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {calendarOpen} = pwa
  const onDateUpdated = (newDate: string) => {
    console.log("onDateUpdated newDate", newDate)
    
  }

  return (
    <Dialog open={calendarOpen}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker 
          defaultValue={dayjs('2022-04-17')} 
          onChange={(newValue: any) => {
            onDateUpdated(newValue)
          }}
          onClose={() => {
            dispatch(toggleCalendar(false))
            dispatch(updateCalendarMode(null))
          }}
        />
      </LocalizationProvider>
    </Dialog>
  )
}
