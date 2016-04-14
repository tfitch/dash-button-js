var dash_button = require('node-dash-button');
var energizer_dash = dash_button("74:c2:46:1d:4e:ec");
var mac_cheese_dash = dash_button("74:75:48:d8:40:94");

energizer_dash.on("detected", function() {
  console.log("found the Energizer Bunny");
});

mac_cheese_dash.on("detected", function() {
  console.log("yummy Mac and Cheese");
});
