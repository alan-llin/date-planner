W.I.P Electron Date Planner with Yelp Fusion API, when none of you can decide where to go/eat/drink

This is a very early stage project. Currently, it basically functions as a electron version of yelp.

Template initialized with Electron-Forge

To Use:
Must have npm installed
Must have a Yelp Fusion API account and set that as the environment variable "yelp_api_key"

1.  Download/Clone the zip/git
2.  "npm install" in the root directory of the app
3.  "npm start" to run the app

Functions:

Search - Displays results from yelp based on interest and location.

Add to plan - Creates a plan item that you can store selected results in.

Randomize - Randomly select a result and set it in the current plan item.

Currently only 3 .js files matter:
searcher.js
plan_manager.js - Doesn't function as intended yet.
locator.js - Doesn't even work as of currently.
