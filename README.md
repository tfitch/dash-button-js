# dash-button-js
I started traveling regularly for work and needed a way for my young children to send me a message when they're thinking about me, or want to get my attention so I can check in with them. They don't need a mobile phone or need to know how to type and email me.  They just need to know how to push the only button on a $5 piece of commodity hardware.

Thus, I used some Node.js libraries to build this app to respond to pushes of an Amazon Dash button on my home network.

# Requirements
1) Install node.js for your machine.  I run this on a Raspberry PI running Raspbian - so I followed the Debian/Ubuntu instructions at https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

2) After installing Node - I use the process monitor Forever to run the app, so install it with `sudo npm install -g forever` Using the `-g` flag installs `forever` for all users, thus the use of `sudo`.

3) Next up - the `dash-button` library from NPM is listening at the network level using the pcap library so pull it in with `sudo apt-get install libpcap-dev` or follow these instructions if not on a Debian OS flavor. https://www.npmjs.com/package/dash-button#installation-and-setup

4) Set up your Dash buttons so they'll connect to your home WiFi network, but not actually order anything.  Or do set them up so they order something AND tweet about it all at the same time.  I'm not going to judge you. https://www.npmjs.com/package/dash-button#setting-up-your-dash-button

# Running the app
1) Complete the above requirements

2) Make sure you've got the Mac Addresses for *your* Dash buttons in the `index.js` file.

3) Make sure you've got and set the four API tokens for Twitter

4) Now have Node get the application dependencies with `npm install`

5) We're ready to run the app! `sudo forever index.js` - this time we're using `sudo` because we're getting down to the network level and listening for ARP requests on the network when the buttons turn on

# Getting notifications from tweets
I use a dedicated, private Twitter account for the buttons to tweet from.  Then I follow that account from my primary Twitter account and setup push notifications in the Twitter app for when my private account tweets.  This results in me getting immediate push notifications on my mobile phone when the buttons are pushed.

# Enjoy!
