chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if ((changeInfo.status == 'complete') && (tab.url.startsWith('https://bitcointalk.org'))) {
		chrome.tabs.executeScript(tab.ib, {
			file: 'btes.js'
		});
	}
})