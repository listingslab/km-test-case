// Kingmakers
import Kingmakers from "./Kingmakers"
import {setGlobals} from "./setGlobals"
import {
  Campaigns,
} from "./Campaigns"
// Components
import AppShell from "./components/AppShell"
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import Search from "./components/Search"
import CurrentTime from "./components/CurrentTime"
import Info from "./components/Info"
import AccordionAdvert from "./components/AccordionAdvert"
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
import { updateFromTime } from "./redux/actions/updateFromTime"
import { updateToTime } from "./redux/actions/updateToTime"

export {
  Kingmakers,
  setGlobals,
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
  updateFromTime,
  updateToTime,
}
