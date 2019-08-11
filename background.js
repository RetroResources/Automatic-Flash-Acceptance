'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contentSettings.plugins.set({
	'primaryPattern': '*://*.playthishotel.com/*',
        'setting': 'allow',
        'scope': 'regular'
    });
});
