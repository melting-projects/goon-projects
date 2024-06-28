
// ==UserScript==
// @name         Twitter/X High Quality Images
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically load the highest quality images on Twitter/X
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // replace image URL with highest quality version
    function replaceWithHighQuality(url) {
        return url.replace(/&name=\w+/, '&name=orig');
    }

    // process all images on the page
    function processImages() {
        const images = document.querySelectorAll('img[src*="pbs.twimg.com/media"]');
        images.forEach(img => {
            if (!img.src.includes('&name=orig')) {
                img.src = replaceWithHighQuality(img.src);
            }
        });
    }

    // observer to watch for new images
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                processImages();
            }
        });
    });

    // Start observing
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial processing of images
    processImages();
})();
