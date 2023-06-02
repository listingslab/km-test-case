import React from "react"
import moment from "moment"
import {
  // CampaignShape, 
  CampaignsShape,
} from "../types"

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  styled,
  Alert,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  FormControl,
  Box,
  InputAdornment,
  Input,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  usePwaSelect,
  usePwaDispatch,
  updateSearchStr,
  selectPWA,
  Font,
  Icon,
} from ".."

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function Campaigns() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const {campaigns, searchStr, toTime, fromTime} = pwa
  function createData(
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    budget: number,
  ) {
    return { id, name, startDate, endDate, budget}
  }
  const rows: CampaignsShape = []
  const filteredCampaigns: CampaignsShape  = []
  for (let i=0; i<campaigns.length; i++){
      let shouldInclude = true
      if (searchStr && searchStr !== "") {
        shouldInclude = false
        if (campaigns[i].name?.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())){
          filteredCampaigns.push(campaigns[i])
        }
      }
      if (shouldInclude) filteredCampaigns.push(campaigns[i])
  }
  for (let j=0; j<filteredCampaigns.length; j++){
    const {
      id,
      name,
      startDate,
      endDate,
      budget,
    } = filteredCampaigns[j]
    rows.push(createData(
      id,
      name, 
      startDate,
      endDate,
      budget,
    ))
  }

  return (<>
            <Card sx={{my:1}}>
              <CardHeader
                title={<Font variant="title">
                          Campaigns
                        </Font>}
                subheader={<Font>
                            PWA that displays a filterable list of Campaigns
                          </Font>}
                avatar={<Avatar src="/png/logo192.png" alt={"KM Test Case"}/>}
                action={<>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open("https://github.com/listingslab/km-test-case/blob/master/src/Kingmakers/Campaigns/campaignsData.ts", "_blank")
                  }}
                >
                  <Icon icon="code" />
                </IconButton>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open("https://github.com/listingslab/km-test-case", "_blank")
                  }}
                >
                  <Icon icon="github" />
                </IconButton>
              </>}
              />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CardContent>
                  <Box sx={{display: "flex"}}>
                    
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <FormControl variant="standard">
                        <Input
                          value={searchStr}
                          placeholder="Filter by name"
                          onChange={(t: any) => {
                            dispatch(updateSearchStr(t.target.value))
                          }}
                          startAdornment={
                            <InputAdornment position="start">
                              <Icon icon="filter" />
                            </InputAdornment>
                          }
                          endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                  onClick={() => dispatch(updateSearchStr(""))}
                                  onMouseDown={() => dispatch(updateSearchStr(""))}
                                  edge="end">
                                  <Icon icon="refresh" />
                                </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box sx={{flexGrow:1}}/>
                    <Box>
                      <DatePicker 
                        label="From"
                        value={fromTime}
                      />
                    </Box>
                    
                    <Box sx={{ml:1}}>
                        <DatePicker
                          label="To"
                          value={toTime}
                          onChange={(newValue) => console.log(newValue)}
                        />
                    </Box>
                  </Box>
                </CardContent>
              </LocalizationProvider>

              {!rows.length ? 
                  <Alert 
                    sx={{m:2}}
                    icon={false}
                    variant="standard" 
                    severity="success"
                    action={<IconButton
                      size="small"
                      color="primary"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(updateSearchStr(""))
                      }}
                    >
                      <Icon icon="refresh" />
                    </IconButton>}
                    onClose={() => {
                      dispatch(updateSearchStr(""))
                    }}>
                      <Font variant="title">No campaigns found</Font>
                  </Alert> : <TableContainer component={"div"}>

                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        <Font variant="title">
                          Campaign
                        </Font>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Font variant="title">From</Font>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Font variant="title">To</Font>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                      <Font variant="title" align="right">Status</Font>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Font variant="title" align="right">Budget</Font>
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, i: number) => {
                      return <StyledTableRow key={`campaign_${i}`}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {row.startDate ? moment(row.startDate).format("DD/MM/YY") : null}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {row.endDate ? moment(row.endDate).format("DD/MM/YY") : null}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  <Icon icon="tick" color="success" />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.budget ? <>${Math.floor(row.budget/1000)}K</> : null }
                                </StyledTableCell>
                              </StyledTableRow>
                            })}
                  </TableBody>
                </Table>
              </TableContainer> }
            </Card>
          </>)
}
/*


// if (toTime){
        // console.log(nowTime, toTime, fromTime)
        // if(nowTime ){
        //   shouldInclude = false
        //   console.log("toTime", toTime)
        //   console.log("nowTime", nowTime)
        //   filteredCampaigns.push(campaigns[i])
        // }
      // }



<Filters />
<CardContent>
  {!filteredCampaigns.length ? <Font variant="title">Nothing found</Font> : null }
  {filteredCampaigns.map((campaign: CampaignShape, i: number) => {
    // if (i > 10) return null
    return <RowCampaign 
              key={`campaign_${i}`}          
              campaign={campaign}
            />
  })}
</CardContent>

    createData(1, "Lying",
      "2021-11-01T22:24:21.086Z",
      "2023-04-23T19:30:50.446Z",
      9338273,
    ),
    createData(2, "Twice",
      "2021-09-10T16:01:41.653Z",
      "2023-05-28T09:41:41.446Z",
      7718484,
    ),
    createData(3, "Third's a charm?",
      "2021-09-10T16:01:41.653Z",
      "2023-05-28T09:41:41.446Z",
      7718484,
    ),
*/