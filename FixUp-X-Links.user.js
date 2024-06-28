// ==UserScript==
// @name         Twitter URL Modifier
// @namespace    http://violentmonkey.github.io
// @version      1.3
// @description  Modifies the Copy Link button under share to have fixupx.com instead of x.com
// I cant get it to work by scanning the DOM and replacing content pre-copy, so it just lets twitter do whatever fuckery it wants, then replaces the copied link with a modified one.
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        GM.setClipboard
// @grant        GM_addValueChangeListener
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function modifyUrl(url) {
        return url.replace(/^https:\/\/(x|twitter)\.com/, 'https://fixupx.com');
    }

    function handleClipboardChange() {
        navigator.clipboard.readText().then(text => {
          //modified to work for twitter and x links bcz le ebin elon meme
            if (text.match(/^https:\/\/(x|twitter)\.com\/.*\/status\//)) {
                const modifiedUrl = modifyUrl(text);
                GM.setClipboard(modifiedUrl);
                console.log('Modified URL copied:', modifiedUrl);
            }
        }).catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }

    // scan for changes to clipboard
    document.addEventListener('copy', function(e) {
        // wait a sec for the copy to go through
        setTimeout(handleClipboardChange, 100);
    });

    console.log('Twitter URL Modifier script is active');
})();
