import React from "react"
import {
  Avatar,
  CardHeader,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Font,
  Campaigns,
} from "../"

export default function AppShell() {
  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    if (!started){
      dispatch(startApp())
    }
  }, [pwa, dispatch])

  return (<>
            <CardHeader
              title={<Font variant="giant" color="white">
                        Kingmakers
                      </Font>}
              subheader={<Font color="white">
                          Where Africa Plays
                        </Font>}
              avatar={<Avatar src="/png/logo192.png" 
                              alt={"Kingmakers"}/>}
            />
            <Campaigns />
          </>)
}
