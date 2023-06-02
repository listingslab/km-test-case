import { 
  PaletteMode, 
  AlertColor,
} from "@mui/material"

export type CampaignShape = {
  id: number
  name?: string
  startDate?: string
  endDate?: string
  budget?: number
  Budget?: number
}
export type CampaignsShape =Array<CampaignShape>


export type NotifyShape = {
  severity: AlertColor
  message?: string
}


export type PwaReduxShape = {
  started: boolean
  data?: any
  lastUpdated?: any
  persisted?: boolean
  theme: ThemeShape
  searchStr: string
  searching: boolean
  toTime: number|null
  fromTime: number|null
  campaigns: CampaignsShape
  notifyer: NotifyShape|null
}





export type SearchShape = {
  type?: string
}

export type CurrencyShape = {
  code: string
  name: string
  icon: string
}

export type ThemeShape = {
  title: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export interface KeyValueShape {
  key: string
  value: any
}
