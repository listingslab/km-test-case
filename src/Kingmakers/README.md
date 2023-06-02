## Listingslab's Kingmakers App

Develop a simple React application that displays a list of campaigns that can be filtered by campaign name and date range

#### Tests

Implements a global method called ‘AddCampaigns’ that accepts an array of campaigns and renders them in the application. Method will be called from the browser’s JavaScript console for testing purposes 

- Method can be called multiple times?
- New campaigns being added to the existing list?

Test Example [JSON campaigns array](../../test.json)

#### Features

Progressive Web App which displays a single page with the following required elements: 
    - A list of campaigns showing; 
        - Name
        - Start Date
        - End Date
        - Active status (based on whether the current date falls within the start and end date range)
        - Budget (in USD)
        - A search form above the list to filter campaigns by name.
        - A date range component for filtering campaigns by start and end dates.

#### QA 

- Campaigns with start dates within the selected date range must be displayed
- Campaigns with end dates within the selected date range must be displayed
- End dates cannot be selected before start dates
- Campaigns with end dates before start dates must not be displayed

______

`/src/Kingmakers/setGlobals.tsx`

These get attached to the window object

```javascript
// check if globals are already set, and if not... set 'em
// window. keyPress Enter
// window.AddCampaigns (data)    
// window.attach object listener
```