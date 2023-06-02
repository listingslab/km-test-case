import React from "react"
import {
  // CampaignShape, 
  CampaignsShape,
} from "../types"
import {
  styled,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  usePwaSelect,
  selectPWA,
  Font,
  Icon,
} from ".."

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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

function createData(
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  budget: number,
) {
  return { id, name, startDate, endDate, budget}
}


// "name": "Lying",
// "startDate": "2021-11-01T22:24:21.086Z",
// "endDate": "2023-04-23T19:30:50.446Z",
// "budget": 9338273,
// "id": 1


const rows = [
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
]


export default function Campaigns() {
  const pwa = usePwaSelect(selectPWA)
  const {campaigns, searchStr/*, toTime, fromTime*/} = pwa
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



              <TableContainer component={"div"}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        Name
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        From
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        To
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Status
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Budget
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => {
                      return <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.startDate}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.endDate}
                        </StyledTableCell>
                        
                        <StyledTableCell align="right">
                          <Icon icon="tick" color="warning" />
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          $ {row.budget}
                        </StyledTableCell>
                      </StyledTableRow>
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

              

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
*/