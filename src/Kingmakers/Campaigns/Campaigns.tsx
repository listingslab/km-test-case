import React from "react"
import moment from "moment"
import {
  CampaignsShape,
} from "../types"
import {
  styled,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  FormControl,
  Box,
  InputAdornment,
  Input,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  DateFilter,
  NoCampaigns,
  usePwaSelect,
  usePwaDispatch,
  updateSearchStr,
  selectPWA,
  Font,
  Icon,
  TableInfo,
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
      let inc = true
      if (searchStr && searchStr !== "") {
        inc = false
        if (campaigns[i].name?.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())){
          filteredCampaigns.push(campaigns[i])
        }
      }
      if (inc) filteredCampaigns.push(campaigns[i])
  }
  for (let j=0; j<filteredCampaigns.length; j++){
    let visible = true
    const {
      id,
      name,
      startDate,
      endDate,
      budget,
    } = filteredCampaigns[j]
    if (toTime){
      if (moment(endDate).valueOf() < toTime ) visible = false
    }
    if (fromTime){
      if (moment(startDate).valueOf() < fromTime ) visible = false
    }
    if (visible){
      rows.push(createData(
        id,
        name, 
        startDate,
        endDate,
        budget,
      ))
    }
  }
  const hasCampaigns = rows.length
  return (<>
            <Card sx={{my:1}}>
              <CardHeader
                title={<Font variant="title">Campaigns</Font>}
                subheader={<Font>PWA that displays a filterable list of Campaigns</Font>}
                avatar={<Avatar src="/png/logo192.png" alt={"KM Test Case"}/>}
                action={<>
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

                <CardContent>
                  <Box sx={{display: "flex"}}>
                    <DateFilter id="fromDate"/>
                    <DateFilter id="toDate"/>
                    <Box sx={{flexGrow:1}}/>
                    
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
                    

                    
                    
                  </Box>
                </CardContent>
                
                {!hasCampaigns ? <NoCampaigns /> : null}
                
              
              <TableContainer component={"div"}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                  <TableInfo />
                  <TableBody>
                    {rows.map((row, i: number) => {
                      let active = true
                      const startDate: number = moment(row.endDate).valueOf()
                      const endDate: number = moment(row.endDate).valueOf()
                      const nowDate: number = Date.now()
                      if (endDate < nowDate || startDate < nowDate){
                        active = false
                      }
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
                                <StyledTableCell align="left">
                                  <Icon icon={active ? "tick" : "close" } 
                                        color={active ? "success" : "warning" }
                                  />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.budget ? <>${Math.floor(row.budget/1000)}K</> : null }
                                </StyledTableCell>
                              </StyledTableRow>
                            })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </>)
}
