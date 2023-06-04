import * as React from 'react'
import { 
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
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
      // console.log("toDate", toDate)
    }
    if (id === "f"){
      console.log(fromDate, "fromDate", newDate)
    }
  }

  return (
    <Box id={id} 
      sx={{
        m:1,
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label={id === "f" ? `Start Date` : `End Date` } 
            onChange={(newValue: any) => {
              onDateUpdated(id, newValue)
            }}
            
          />
        </LocalizationProvider>
        
    </Box>
  )
}



/* 




<Font>
          {id === "f" ? `from ${fromDate}` : `to ${toDate}`}
        </Font>
        
        
        <Box>
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
                    </Box> */