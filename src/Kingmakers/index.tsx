// Kingmakers
import Kingmakers from "./Kingmakers"
import {registerAddCampaigns} from "./registerAddCampaigns"
import {
  Campaigns,
  NoCampaigns,
  DateFilter,
  TableInfo,
  Calendar,
} from "./Campaigns"
// Components
import AppShell from "./components/AppShell"
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import Search from "./components/Search"
import CurrentTime from "./components/CurrentTime"
import Info from "./components/Info"
import AccordionAdvert from "./Campaigns/AccordionAdvert"
import Notifyer from "./components/Notifyer"

// Theme
import MuiTheme from "./theme/MuiTheme"
import {makeTheme} from "./theme/makeTheme"
// Hooks
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
// Redux
import WrapRedux from "./redux/WrapRedux"
import {theme} from "./redux/theme"
import {selectPWA, setPwaKey} from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { setCurrency } from "./redux/actions/setCurrency"
import { onUpdate } from "./redux/actions/onUpdate"
import { updateSearchStr } from "./redux/actions/updateSearchStr"
import { updateFromDate } from "./redux/actions/updateFromDate"
import { updateToDate } from "./redux/actions/updateToDate"
import { addNewCampaign } from "./redux/actions/addNewCampaign"
import { toggleCalendar } from "./redux/actions/toggleCalendar"
import { updateCalendarMode } from "./redux/actions/updateCalendarMode"

export {
  Kingmakers,
  registerAddCampaigns,
  Campaigns,
  AppShell,
  theme,
  store,
  persistor,
  setPwaKey,
  CurrentTime,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  makeTheme,
  Search,
  Info,
  AccordionAdvert,
  Notifyer,
  Icon,
  Font,
  selectPWA,
  startApp,
  setCurrency,
  onUpdate,
  updateSearchStr,
  updateFromDate,
  updateToDate,
  addNewCampaign,
  NoCampaigns,
  DateFilter,
  TableInfo,
  Calendar,
  toggleCalendar,
  updateCalendarMode,
}
