# Vysor.IO_Bot

#### Intro

Some days ago I was reading about an app called Vysor 

- an [Article on TC](http://techcrunch.com/2015/08/24/vysor-puts-your-android-devices-screen-on-your-desktop/)
- the [app page](www.vysor.io)

This app allows you to control your android device from your desktop pc installing:
- a daemon on your phone
- a chrome app/extension
I was interested on how the app worked and the security aspect of having something like this on a smartphone.
I wrote this hack to explain how you can create a simple bot using vysor and to think about other aspect

#### Installation
In order to test the script:
- vysor.io it is installed and working on your machine
- you neeed nodejs installed and configured on your system
- download the script
- inside the script directory digits: node install ws

To run the script: node coc.js

#### The good: a bot
On this repo you can find the script coc.js.
It is a script for the game Clash of Clans (so your device need it).  
This script launch clash of clans and simulate swype on the screen: it is useful when you have no shield.  
This basically helps you to protect the village when the shield is 0, simulating fake activity.

#### The bad: automatically install a virus
I have not demonstrated yet but since it is possible to create a sequence of events, it is also possible to create a sequence of nasty commands like:

- press home
- type "chrome"
- type "malicious website" (this can download an apk with a virus)
- press home
- type "download"
- type "down"
- type enter 
- confirm installation

#### Any Question? Need Help?
You can write me on twitter (@dega1999)[https://twitter.com/dega1999]

