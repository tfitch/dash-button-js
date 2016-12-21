var dash_button = require('node-dash-button');
// kid buttons
var energizer_dash = dash_button("74:c2:46:1d:4e:ec");
var mac_cheese_dash = dash_button("74:75:48:d8:40:94");
var bounty_dash = dash_button("74:c2:46:2d:db:59");
// extra buttons
var brawny_dash = dash_button("a0:02:dc:7b:dc:e3");
var pure_leaf_dash = dash_button("a0:02:dc:02:1f:76");
var smart_water_dash = dash_button("a0:02:dc:47:0b:69");

// when you copy and pasta you mix ' and " -  ¯\_(ツ)_/¯
var Twitter = require('twitter');
// get your own keys by following info at https://twittercommunity.com/t/where-is-consumer-key/1506
var twitter_client = new Twitter({
  consumer_key: 'invalid_consumer_key',
  consumer_secret: 'invalid_consumer_secret',
  access_token_key: 'invalid_access_token_key',
  access_token_secret: 'invalid_access_token_secret'
});

function postToTwitter(msg) {
  twitter_client.post('statuses/update', {status: msg + ' ' + getFormattedDate()}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    } else {
      console.log(error);
    }
  });
};

energizer_dash.on("detected", function() {
  console.log("found the Energizer Bunny");
  postToTwitter("Kid1 has pushed her Dash button.");
});

mac_cheese_dash.on("detected", function() {
  console.log("yummy Mac and Cheese");
  postToTwitter("Kid2 has pushed her Dash button.");
});

bounty_dash.on("detected", function() {
  console.log("Bounty is green for Kid3");
  postToTwitter("Kid3 has pushed his Dash button.");
});

brawny_dash.on("detected", function() {
  console.log("Brawny is a test button");
  postToTwitter("Test Brawny was pushed.");
});

pure_leaf_dash.on("detected", function() {
  console.log("Pure Leaf is a test button");
  postToTwitter("Test Pure Leaf was pushed.");
});

smart_water_dash.on("detected", function() {
  console.log("SmartWater is a test button");
  postToTwitter("Test SmartWater was pushed.");
});

// because pretty date time formatting in JS is embarrassing (or otherwise unknown to me)
function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;

    return str;
};
