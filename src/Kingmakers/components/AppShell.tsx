import React from "react"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Campaigns,
  setGlobals,
} from "../"

export default function AppShell() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  
  React.useEffect(() => {
    const {started} = pwa
    setGlobals()
    if (!started) dispatch(startApp())
  }, [pwa, dispatch])

  return <Campaigns />
}
