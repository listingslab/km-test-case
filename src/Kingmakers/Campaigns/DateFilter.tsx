import * as React from 'react'
import dayjs from 'dayjs'
import { 
  Box,
  // IconButton,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  // Icon,
} from ".."
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from "@mui/x-date-pickers"

export default function DateFilter(props: any) {
  const pwa = usePwaSelect(selectPWA)
  const {fromDate, toDate} = pwa
  const {id} = props
  
  const onDateUpdated = (id: string, newDate: string) => {
    if (id === "t"){
      console.log(toDate,"toDate", newDate)
    }
    if (id === "f"){
      console.log(fromDate, "fromDate", newDate)
    }
  }

  return (
    <Box id={`date-filter-${id}`} 
      sx={{
        display: "flex",
        mr: 1,
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            value={id === "f" ? dayjs(fromDate) : dayjs(toDate)  } 
            label={id === "f" ? `From` : `To` }
            format="DD/MM/YYYY" 
            onChange={(newValue: any) => {
              onDateUpdated(id, newValue)
            }}
          />
        </LocalizationProvider>
        {/* <Box sx={{m:1}}>
          <IconButton>
            <Icon icon="close" />
          </IconButton>
        </Box> */}
        
    </Box>
  )
}
