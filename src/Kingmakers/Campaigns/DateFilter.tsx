import * as React from 'react'
import { 
  Alert,
  IconButton,
} from "@mui/material"
import { 
  Icon,
  Font,
  usePwaDispatch,
  updateSearchStr,
} from ".."

export default function DateFilter() {
  const dispatch = usePwaDispatch()

  return (
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
      onClose={() => {}}>
        <Font variant="warning">No campaigns :(</Font>
    </Alert>
  )
}
