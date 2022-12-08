// ==UserScript==
// @name           Igazgatoi kattinto program
// @namespace      http://example.org
// @description    Kattint helyetted a tovabbkepzesen
// @version        1.0.0
// @downloadURL    https://github.com/solymosi/npu/raw/master/npu.user.js
// @include        http://*menedzserpraxis*/*archiv*/*
// ==/UserScript==


setInterval(function() {
    function generalas() {
        var min = 1,
            max = 9;
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 9
    };
    document.getElementById("imWatchingButton").click();
    console.log('kattintott');
}, rand * 60000);