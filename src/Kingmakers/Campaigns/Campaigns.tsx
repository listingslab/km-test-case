import React from "react"
import {
  // CampaignShape, 
  CampaignsShape,
} from "../types"
import {
  styled,
  Card,
  CardHeader,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
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
    backgroundColor: theme.palette.common.black,
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
      // if (toTime){
        // console.log(nowTime, toTime, fromTime)
        // if(nowTime ){
        //   shouldInclude = false
        //   console.log("toTime", toTime)
        //   console.log("nowTime", nowTime)
        //   filteredCampaigns.push(campaigns[i])
        // }
      // }
      if (shouldInclude) filteredCampaigns.push(campaigns[i])
  }

  return (<>
            <Card>
              <CardHeader
                title={<Font variant="title">
                          Campaigns
                        </Font>}
                avatar={<Icon icon="rocket" color="primary" />}
              />



              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">Fat&nbsp(g)</StyledTableCell>
                      <StyledTableCell align="right">Carbs&nbsp(g)</StyledTableCell>
                      <StyledTableCell align="right">Protein&nbsp(g)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Card>
          </>)
}

/*
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