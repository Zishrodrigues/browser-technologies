# Browser Technologies - Final [List Demo]

For this project I created a demo of a address list build using HTML, CSS and Javascript. The project has multiple fallbacks in place in case a user doesn't have access to css or javascript, some using serverside rendering.

## Installing the project

Using the following steps you can install and use the app locally.

#### Cloning or downloading the repo

```
$ git clone https://github.com/Zishrodrigues/browser-technologies.git
```
#### Installing the required dependencies
In the folder week-3-FINAL run the following command:
```
$ npm install
```
Wait for the required npm packages to install and proceed further.

#### Starting and running the server
Make sure port 3000 isn't being used by another project. If this is the case run the following command
```
$ npm start
```
If you get the message ```app listening in port 3000 ``` the server started successfully on localhost:3000.

## Project overview

My demo is a dynamic list of contacts.

![overview page](https://raw.githubusercontent.com/zishrodrigues/browser-technologies/master/week-3-FINAL/screenshots/overview.jpg)

## Testing fallbacks & feature detection

#### Internet Explorer

I tested the project on several versions of Internet Explorer (9+). Sticky position doesn't work but the app still works fine due to the fallback of having headers and the client-side search function

#### Chrome (masterrace)

All versions of Chrome that i've tested (55+) run the app without issues.

#### Opera

I tested on Opera version 44 and the app worked fully.

#### No Javascript

Without Javascript my serverside fallback is enabled. The app still has it's search function and the sticky position works if the browser in question supports it. I tested in Chrome and it worked.
