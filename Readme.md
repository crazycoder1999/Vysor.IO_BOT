# Vysor.IO_Bot

#### Intro

Some days ago I was reading about an app called Vysor 

- an [Article on TC](http://techcrunch.com/2015/08/24/vysor-puts-your-android-devices-screen-on-your-desktop/)
- the [app page](www.vysor.io)

This app allows you to control your android device from your desktop pc installing:

- a daemon on your phone
- a chrome app/extension

I was interested on how the app worked and the security aspects of having something like this on a smartphone.  
I wrote this hack to explain how you can create a simple bot using vysor.  
My device is a nexus 5 running android kitkat 4.4.4.
The script was tested on 29 august.

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
You can find other creative way to use it.  

#### The bad: automatically install a virus
I have not demonstrated yet but I suppose, it is also possible to create a sequence of dangerous commands like:

- press home
- type "chrome"
- type "malicious website" (this can download an apk with a virus)
- press home
- type "download"
- type "down"
- type enter 
- confirm installation

This is possible with another nodejs script.  
I'm pretty sure it is possible to create a malicious/stealthy android app with only one permission (maybe "android.permission.INTERNET") that generate these commands.

#### Be Aware of the danger
Vysor.io is an incredible well made app with a lot of interesting technology inside: webgl, h264, websockets.
I started to reverse engineering it because it is a very good project, really useful for apps testing.    
I'm not saying "don't use it! it is dangerous" instead, you should be aware of the possible security problems you are exposing your phone in the future.  
Personally, I'm using it on an development phone: used only for testing apps.  

#### Any Question? Need Help?
You can write me on twitter (@dega1999)[https://twitter.com/dega1999]

