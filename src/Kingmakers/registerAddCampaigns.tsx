// import {Campaign} from "./types"
import {
    setPwaKey,
    store,
} from "."

export const registerAddCampaigns = () => {
    // @ts-ignore
    window.addCampaigns = function(data) {
        try {
            let severity = "success"
            let message = "Campaigns added. Nice."
            
            if (!data){
                severity = "warning"
                message = "Please pass an array of Campaigns in your method call to AddCampaigns()"
            }

            store.dispatch(setPwaKey({ key: "notifyer", value: {
                severity,
                message 
            }}))  
            
        } catch (error: any) {
            store.dispatch(setPwaKey({ key: "notifyer", value: {
                severity:"error",
                message: `ERROR: ${error.toString()}`
            }}))  
        }         
    }
}


