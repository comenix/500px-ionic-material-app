# Demo Hybrid Application using 500px API + Ionic + Material

## How to use locally?

###Step 1: Clone the repository or Download the zip file
###Step 2: Navigate and install dependencies

$ npm install -g cordova ionic

$ cd 500px-ionic-material-app
$ ionic platform add ios
$ bower install

-------------------------------

$ ionic build ios
$ ionic emulate ios

OR

$ ionic serve

###Step 3: (Optional) Use your very own app from developers.500px.com

####Authorization
Register a new application on 500px (http://500px.com/settings/applications), you would receive a consumer_key and consumer_secret.

Replace the consumer_key in controllers.js and take the app to the next level.

### What's next after Step 3?

You can then use the Grant app (https://grant-oauth.herokuapp.com/) to get a valid token and token_secret for testing.

####Authentication

After specifying your consumer_key and consumer_secret, you receive a token and a 
token_secret. These are going to give you the right to post and retrieve user content.


### API documentation used in this demo (https://github.com/500px/api-documentation/blob/master/endpoints/photo/GET_photos.md)