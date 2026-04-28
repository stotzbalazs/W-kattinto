// ==UserScript==
// @name           Igazgatoi kattinto program
// @description    Kattint helyetted a tovabbkepzesen
// @version        2.0.0
// @include        http://*menedzserpraxis*/*archiv*/*
// @downloadURL    https://raw.githubusercontent.com/stotzbalazs/W-kattinto/master/wkattinto.user.js
// @updateURL      https://raw.githubusercontent.com/stotzbalazs/W-kattinto/master/wkattinto.user.js
// @grant          none
// @run-at         document-idle
// ==/UserScript==

function scheduleClick() {
    var rand = Math.floor(Math.random() * 9) + 1;
    setTimeout(function() {
        var btn = document.getElementById("imWatchingButton");
        if (btn) {
            btn.click();
            console.log('kattintott (' + rand + ' perc múlva újra)');
        } else {
            console.log('nincs gomb (' + rand + ' perc múlva újra próbálom)');
        }
        scheduleClick();
    }, rand * 60000);
}

scheduleClick();