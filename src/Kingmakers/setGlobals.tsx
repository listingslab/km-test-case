// import {Campaign} from "./types"
import {
    setPwaKey,
    store,
} from "./"

export const setGlobals = () => {
    
    // @ts-ignore
    window.addCampaigns = function(data) {
        if (!data){
            store.dispatch(setPwaKey({ key: "notifyer", value: {
                severity: "warning",
                message: "Please pass addCampaigns with an array of Campaigns"
            } }))
        }
        // console.log('addCampaigns', data);
    }
    return
}


