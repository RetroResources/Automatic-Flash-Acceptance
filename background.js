'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contentSettings.plugins.set({
		'primaryPattern': '*://*.playthishotel.com/*',
        ///'primaryPattern': 'https://*/*',
        'setting': 'allow',
        'scope': 'regular'
    });
});