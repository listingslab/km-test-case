# [Solution README](./src/Kingmakers/README.md)

[Demo](https://kingmakers-test.web.app/)

 > !important; when testing the app with the AddCampaigns() method in console, 
 please make sure there is no whitespace in your JSON. eg;

 ```javascript
[{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","Budget":88377},{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018","Budget":608715},{"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","Budget":239507},{"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017","Budget":179838},{"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Budget":837850},{"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2017","Budget":858131},{"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","Budget":109078},{"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","Budget":272552},{"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017","Budget":301919},{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017","Budget":505602}]
```
____________

### [https://dimik.github.io/km-test-case](https://dimik.github.io/km-test-case/).

### The assignee is required to develop a simple React application that displays a list of campaigns that can be filtered by campaign name and date range.
Requirements:
1. Create a public GitHub repository for the application.
2. Use React and Typescript for the application development.
3. Feel free to use any libraries or tools during development.
4. Design the application with production-quality code and styling.

### Application Features:
Display a single page with the following elements:
1. A list of campaigns showing:
- Name
- Start Date
- End Date
- Active status (based on whether the current date falls within the start and end date range)
- Budget (in USD)
2. A search form above the list to filter campaigns by name.
3. A date range component for filtering campaigns by start and end dates.

### Ensure that:
1. Campaigns with start dates within the selected date range are displayed.
2. Campaigns with end dates within the selected date range are displayed.
3. End dates cannot be selected before start dates.
4. Campaigns with end dates before start dates are not displayed.

### Design Guidelines:
1. Use your creativity for the UI design.
2. Display the campaign list in a table format.
3. Use a green color palette for active campaigns and a red color palette for inactive campaigns.

### Testing the Application:
1. Implement a global method called ‘AddCampaigns’ that accepts an array of campaigns and renders them in the application.
2. This method will be called from the browser’s JavaScript console for testing purposes.
3. Ensure the method can be called multiple times, with new campaigns being added to the existing list.

Example of campaign array that can be passed

```json
[{"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","B
udget":88377},
{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018",
"Budget":608715},
{"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","Bu
dget":239507},
{"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017",
"Budget":179838},
{"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Bu
dget":837850},
{"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2017",
"Budget":858131},
{"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","
Budget":109078},
{"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","
Budget":272552},
{"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017",
"Budget":301919},
{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017
","Budget":505602}]
```
