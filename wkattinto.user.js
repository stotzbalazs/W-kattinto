// ==UserScript==
// @name           Igazgatoi kattinto program
// @description    Kattint helyetted a tovabbkepzesen
// @version        2.4.0
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
    var minMs = 1 * 60000;  // 1 perc
    var maxMs = 9 * 60000;  // 9 perc
    var delay = Math.random() * (maxMs - minMs) + minMs;
    
    var sec = Math.round(delay / 1000);
    console.log('várakozás: ' + Math.floor(sec / 60) + ' perc ' + (sec % 60) + ' másodperc');
    
    setTimeout(function() {
        var btn = findButton();
        if (btn) {
            btn.click();
            console.log('kattintott');
        } else {
            console.log('nincs gomb');
        }
        scheduleClick();
    }, delay);
}

scheduleClick();