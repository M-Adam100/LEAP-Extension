// ON INSTALL TASKS
chrome.runtime.onInstalled.addListener(() => chrome.storage.local.set({
	settingsData: {
		viewDetails: false,
		viewUPCs: false,
		viewChart: false
	}
}));
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
	if (details.frameId === 0) {
		chrome.tabs.get(details.tabId, function (tab) {
			if (tab.url === details.url) {
				if (tab.url.includes('walmart.com/ip') && !tab.url.includes('cart')) {

					chrome.scripting.insertCSS({
						target: { tabId: tab.id },
						files: ["scripts/styleRules.css"]
					})
					chrome.scripting.executeScript({
						target: { tabId: tab.id },
						files: [
							"scripts/otherFunctions.js",
							  'scripts/extractWalmart.js',
							  'highChartScripts/highCharts.js',
							  'highChartScripts/accessability.js',
							  'highChartScripts/series-label.js',
							  'scripts/addChart.js'
							 ]
					})
				} else if (tab.url.includes('walmart.com/browse') || tab.url.includes('walmart.com/search?')) {
					chrome.scripting.insertCSS({
						target: { tabId: tab.id },
						files: ["scripts/styleRules.css"]
					})
					chrome.scripting.executeScript({
						target: { tabId: tab.id },
						files: ["scripts/otherFunctions.js",  'scripts/viewDetails.js', ]
					})
				}
			}
		});
	}
});

//DEMO UPCs
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({
		"DemoCount": 0
	});
	chrome.storage.local.set({
		"Time": Date.now()
	})
	//GET EMAIL
	chrome.identity.getProfileUserInfo(async (userinfo) => {
		if (userinfo.email) {
			await fetch("https://licenses.sceptermarketing.com/activecampaign/createContact", {
				"headers": {
					"content-type": "application/json"
				},
				"body": JSON.stringify({
					email: userinfo.email,
					currentProductId: 10375297
				}),
				"method": "POST"
			})
		}
	});
});


// HEADER MODIFIER
var headerModifier = {
	"configuration": {
		"filter": {
			"urls": [
				"https://www.walmart.com/ip/*"
			]
		},
		"extraInfoSpec": [
			"requestHeaders",
			"blocking",
			"extraHeaders"
		]
	},
	"modifierFunction": details => {
		var { requestHeaders } = details;
		var headerList = {};
		requestHeaders.forEach(header => headerList[header.name] = header);
		if (headerList.extraHeaders) try {
			var extraHeaders = JSON.parse(atob(headerList.extraHeaders.value));
			delete headerList.extraHeaders;
			Object.keys(extraHeaders).forEach(headerName => headerList[headerName] = {
				"name": headerName,
				"value": extraHeaders[headerName]
			});
			requestHeaders = Object.values(headerList);
		} catch { }
		return { "requestHeaders": requestHeaders };
	},
	"initialize": (configuration, callBack) => {
		// UPDATE CONFIGURATION
		if (configuration) headerModifier.configuration = configuration;

		// REMOVE EXISTING LISTNER
		//if (chrome.webRequest.onBeforeSendHeaders.hasListener(headerModifier.modifierFunction)) chrome.webRequest.onBeforeSendHeaders.removeListener(headerModifier.modifierFunction);

		// ADD LISTNER
		//chrome.webRequest.onBeforeSendHeaders.addListener(headerModifier.modifierFunction, headerModifier.configuration.filter, headerModifier.configuration.extraInfoSpec);

		if (callBack) callBack();
	}
};
headerModifier.initialize();

// DETAILS CACHE
const doDelay = async milliSeconds => new Promise(resolution => setTimeout(resolution, milliSeconds));
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);