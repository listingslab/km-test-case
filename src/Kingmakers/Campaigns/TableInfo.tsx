import * as React from 'react'
import { 
  styled,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  Font,
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

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }))


export default function TableInfo() {

  return (
    <TableHead>
        <TableRow>
          <StyledTableCell>
            <Font variant="title">
              CAMPAIGN
            </Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title">FROM</Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title">TO</Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title" align="left">STATUS</Font>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Font variant="title" align="right">BUDGET</Font>
          </StyledTableCell>
        </TableRow>
      </TableHead>
  )
}
