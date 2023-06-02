import {CampaignsShape} from "./types"
import {
    setPwaKey,
    store,
    addNewCampaign,
} from "./"

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
            const newCampaigns: CampaignsShape = []
            for (let i=0; i< data.length; i++){
                // console.log("campaign", data[i])
                store.dispatch(addNewCampaign(data[i]))
                newCampaigns.push(data[i])
            }
            if (!newCampaigns.length){
                severity = "info"
                message = "No campaigns added"
            }
            if (newCampaigns.length){
                message = `${newCampaigns.length} new campaign${newCampaigns.length > 1 ? "s" : ""} added. Nice.`
            }
            store.dispatch(setPwaKey({ key: "notifyer", value: {severity, message}}))  

        } catch (error: any) {
            store.dispatch(setPwaKey({ key: "notifyer", value: {
                severity:"error",
                message: `ERROR: ${error.toString()}`
            }}))  
        }         
    }
}


