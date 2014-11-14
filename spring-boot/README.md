For multiple pages application, the workflow is like this:

At src\main\webapp

````
sencha generate workspace ./
````

To create new page app

````
sencha -sdk {{/dir/your_extjs5_download}} generate app {{YourAppName}} {{/your-app-name}}
````

Take note that -sdk parameter is a must for first page app

To create Package called "common" to share files:

````
sencha generate package -name common
````

