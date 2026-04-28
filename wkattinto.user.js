// ==UserScript==
// @name           Igazgatoi kattinto program
// @description    Kattint helyetted a tovabbkepzesen
// @version        2.3.0
// @include        *://*menedzserpraxis*/*archiv*/*
// @grant          none
// @run-at         document-idle
// @downloadURL    https://raw.githubusercontent.com/stotzbalazs/W-kattinto/master/wkattinto.user.js
// @updateURL      https://raw.githubusercontent.com/stotzbalazs/W-kattinto/master/wkattinto.user.js
// ==/UserScript==

function findButton() {
    return document.getElementById("imWatchingButton")
        || document.querySelector(".buttImWatching")
        || document.querySelector(".buttRed");
}

function scheduleClick() {
    var rand = Math.floor(Math.random() * 9) + 1;
    console.log('várakozás: ' + rand + ' perc');
    setTimeout(function() {
        var btn = findButton();
        if (btn) {
            btn.click();
            console.log('kattintott');
        } else {
            console.log('nincs gomb');
        }
        scheduleClick();
    }, rand * 60000);
}

scheduleClick();