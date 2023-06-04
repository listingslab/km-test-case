import * as React from 'react'
import dayjs from "dayjs"
import {
  Dialog, 
  DialogTitle,
} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { 
  StaticDatePicker,
} from "@mui/x-date-pickers"
import { 
  usePwaSelect,
  usePwaDispatch,
  notify,
  selectPWA,
  toggleCalendar,
  updateCalendarMode,
  Font,
  updateFromDate,
  updateToDate,
} from ".."

export default function Calendar() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {calendarOpen, calendarMode, fromDate, toDate} = pwa
  const onDateUpdated = (newDate: any) => {
    const selectedDate = dayjs(newDate).format()
    if (calendarMode === "from"){
      if (dayjs(newDate).isAfter(dayjs(toDate))){
        dispatch(notify("info", "From dates cannot be selected after To dates."))
        return null
      }
    }
    if (calendarMode === "to"){
      if (dayjs(newDate).isBefore(dayjs(fromDate))){
        dispatch(notify("info", "To dates cannot be selected before From dates."))
        return null
      }
    }
    if (calendarMode === "from") dispatch(updateFromDate(selectedDate))
    if (calendarMode === "to") dispatch(updateToDate(selectedDate))
    dispatch(toggleCalendar(false))
    dispatch(updateCalendarMode(null))
  }

  return (
    <Dialog open={calendarOpen}>
      <DialogTitle>
        <Font variant="giant">
          {calendarMode === "to" ? "To" : "From"}
        </Font>
      </DialogTitle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker 
          onChange={(newDate: any) => {
            onDateUpdated(newDate)
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
