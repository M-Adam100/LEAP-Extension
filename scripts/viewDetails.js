// FUNCTIONS
;(function() {
	const getDetailsCache = async walmartId => {
		const res = new Promise((resolve, reject) => {
			chrome.storage.local.get(walmartId, async (detailsCache) => {
				resolve(detailsCache);
			 })
		});
		const detailsData = await res;
		return detailsData[walmartId]?.detailsData ;
	};
	
	const setDetailsCache = (walmartId, detailsData) => {
		chrome.storage.local.set({
			[walmartId]: {
				"detailsData": detailsData,
				"expirationDate": new Date().getTime() + (12 * 60 * 60 * 1000)
			}
		});
	};
	
	const getOriginalPrice = product => {
		let originalPrice = '';
		let estimatedCategory = '';
		try {
			const itemCategory = product.ironBankCategory;
			const categoryPath = product.category.categoryPathId;
			const categories = ['Automotive & Powersports', 'Camera & Photo', 'Cell Phones', 'Consumer Electronics', 'Industrial & Scientific', 'Major Appliances', 'Musical Instruments', 'Personal Computers', 'Tires & Wheels', 'Video Game Consoles', 'Jewelry', 'Watches'];
			estimatedCategory = (categories.filter(category => `${itemCategory}|${categoryPath}`.match(new RegExp(category, 'i')))).pop() || 'Others';
			const flatRates = {
				"Automotive & Powersports": 0.88,
				"Camera & Photo": 0.92,
				"Cell Phones": 0.92,
				"Consumer Electronics": 0.92,
				"Industrial & Scientific": 0.88,
				"Major Appliances": 0.92,
				"Musical Instruments": 0.88,
				"Personal Computers": 0.94,
				"Tires & Wheels": 0.9,
				"Video Game Consoles": 0.92,
				"Others": 0.85
			};
			const itemPrice = product.priceInfo.currentPrice.price;
			if (flatRate = flatRates[estimatedCategory]) {
				originalPrice = itemPrice * flatRate;
			} else if (estimatedCategory === 'Jewelry') {
				if (itemPrice > 300) originalPrice = 250 + (itemPrice - 300) * 0.95;
				else originalPrice = itemPrice * 0.8;
			} else if (estimatedCategory === 'Watches') {
				if (itemPrice > 1500) originalPrice = 1500 + (itemPrice - 1725) * 0.97;
				else originalPrice = itemPrice * 0.85;
			}
			originalPrice = Number(originalPrice.toFixed(2));
		} catch { }
		return {
			originalPrice,
			estimatedCategory
		};
	};
	
	const getDetails = async (walmartId, itemUrl, lastCallTime) => {
		if (detailsData = await getDetailsCache(walmartId)) {
			return detailsData;
		} else 
		{
			// DO RANDOM DELAY
			var currentTime = new Date().getTime();
			await doDelay(lastCallTime - currentTime);
	
			// FETCH DATA
			const htmlData = await fetch(itemUrl, {
				"headers": {
					"extraHeaders": btoa(JSON.stringify({
						"referer": "https://www.walmart.com/",
						"sec-fetch-dest": "document",
						"sec-fetch-mode": "navigate",
						"sec-fetch-site": "same-origin",
						"sec-fetch-user": "?1",
						"upgrade-insecure-requests": "1"
					}))
				},
				"method": "GET"
			}).then(body => body.text());
			let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
			let match;
			let productData;
			let i = 0;
			while ((match = re.exec(htmlData))) {
				i++;
				let data = match[1].replace(/\s+/g, "");
				if (data.includes("props")) {
					productData = JSON.parse(data);
				}
			}
			const { product } = productData.props.pageProps.initialData.data;
			const upc = product.upc;
	
			let detailsData = {
				arrivesIn: {}
			};
			try {
				for (deliveryLable of htmlDoc.querySelectorAll('[id="product-overview"] .fulfillment-shipping-msg-tile')) {
					if (deliveryLable.innerHTML.match(/NEXTDAY/i)) detailsData.arrivesIn['1'] = true;
					if (deliveryLable.innerHTML.match(/2-DAY/i)) detailsData.arrivesIn['2'] = true;
				}
			} catch { }
			try {
				detailsData.itemRank = Number(htmlData.match(/rank="([0-9]*)"/).pop());
			} catch { }
			try {
				detailsData.totalOffers = product.additionalOfferCount + 1;
			} catch { }
			try {
				detailsData.upc = upc || null;
			} catch { }
			const originalPriceData = getOriginalPrice(product);
			detailsData.originalPrice = originalPriceData.originalPrice;
			detailsData.estimatedCategory = originalPriceData.estimatedCategory;
			detailsData.soldByWalmart = product.sellerId == "F55CDC31AB754BB68FE0B39041159D63" || false;
			setDetailsCache(walmartId, detailsData);
			return detailsData;
		}
	};
	
	
	const checkDetails = async walmartId => {
		const itemNode = document.querySelector(`[walmartId="${walmartId}"][detailsChecked]`);
		// CREATE BOX
		var detailsBox = itemNode.querySelector('[detailsBox]') || document.createElement("div");
		detailsBox.setAttribute('detailsBox', true);
		detailsBox.innerHTML = `<div loadingAnimation="" style="margin: 5em 0; zoom: 0.5;"></div>`;
		itemNode.querySelector('div[data-testid="list-view"]').parentElement.parentNode.insertBefore(detailsBox, itemNode.querySelector('div[data-testid="list-view"]').parentElement.nextSibling);
	
		// DO RANDOM DELAY
		var currentTime = new Date().getTime();
		var thisCallTime = (window.lastCallTime || 0) + getRandomInt(250, 1750);
		window.lastCallTime = (thisCallTime > currentTime) ? thisCallTime : currentTime;
		await doDelay(window.lastCallTime - currentTime);
	
		// GET DETAILS DATA
		const itemUrl = itemNode.querySelector('a[href*="/ip/"]').href;
		const detailsData = await getDetails(walmartId, itemUrl);
			detailsBox.innerHTML = `
				<div style="font-size: 13px; padding: 5px 7.5px;">
					<span class="elc-icon elc-icon-money-services elc-icon-18"></span> Price: $${detailsData.originalPrice} (W/O Fees)<br>
					<span class="elc-icon elc-icon-store elc-icon-18"></span> Number of seller(s): ${detailsData.totalOffers || 1}<br>
					${detailsData.itemRank ? `<span class="elc-icon elc-icon-filter elc-icon-18"></span> Rank: ${detailsData.itemRank}<br>` : ''}
					${detailsData.arrivesIn['1'] ? '<span class="elc-icon elc-icon-next-day elc-icon-18"></span> Next day delivery<br>' : ''}
					${detailsData.arrivesIn['2'] ? '<span class="elc-icon elc-icon-truck elc-icon-18"></span> 2 day delivery<br>' : ''}
					${detailsData.soldByWalmart ? `<span class="elc-icon elc-icon-spark elc-icon-18"></span> Sold & shipped by Walmart<br>` : ''}
					${detailsData.upc ?`<span class="class="fas fa-eye"></span> View this product on Amazon: <a href='https://www.amazon.com/s?k=${detailsData.upc}&tag=scepter01b-20' target="_blank"><img height="20" title="View this Product on Amazon!" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFK0lEQVRoge2ZW2xUVRSGv3WmFwqlxcpFTVpFAwZDiKE4pRihidBCoReRYoKKGBKMGhMJ8iJEB4OakBgNiRh4AI0QLcUw03JrQcEIoS2pAa8PKJJGFBEt1EqZmc5ZPswoWOe05+wZHkz6P+6117///+y9z77BEIYwhP81JG1MgYDlbz1Vgto1gkxF9R6EkUAe0AVcUPQUKq2ZqvXHDjb+lI5m02Jg+tzqhaqyHpjkMqUPIWhlxJ4/vmfPuVTaTslAWVnZsN7s/HeAZYYUv4vKY60twf2mGizTRAIBqzc7/wPMxQMUKPqRf071NFMCYwP+4ydfAGpN8/+BkCOWtRnD0WCUVFpRV2ATOQPkm+Qng8LM9ubQZ17zjHogJuHlDCy+HssuzcjWvCwrayzCs8ClgThFZZ6JlgyTpIEb07famhtXXlfwB7DJX/5Qp4jd5EzK3SZazOaAMt2hvDccttYlC7W37N4L/OnIKVpkIsWoBxRZIuhsQW9XpAgoAkapsOPkkaDTUFHgMjDCIVxgosXIQHtLMAgEry8rK6vLHTOG3nYTQkBUjLQYJSXDkSMNPankq+IzyUubgdKKugKVaDWqJSoyEdUiIJP4XgjgpgEJxOyXnrKBkvLaYkRfsolUogk+1VRpXSMVAzJ9bu3LqroWzLo/HTA24K+ofltVn06nGBMYGfCXVz8hyEDiv1PV7ZbIMcuSH9TO7OrOoye3OxI21OkIzwaKq6qGS0Q2OMUVXo1dHLeuo2NL9F95xSsyGf2LicYB4dlARlQWAmOTBpUP21tCa5OFskZ3jbS9NuYC3rcSKuWOIcva6BSL0VfouS0X8GxAYbJTLHJVv3VsSHXGINSjvGoBAwMywII0Micz0ylNRQc7uQ2/r7LyFq96THajV50CEY3UJSv3V9SuBvyDEUssY5FXMZ6X75KKmk+BmQ7hHhF5LsMXDQHEohmTYhbPiPKoS/qf+2JZkzoONVx2q8f7OqC0IY4GclV1W7QvQSsg3nYVt/p84S3AI24TvM8B1ZDXHE/8yOKSOQsmuK3v2UDrwcZjwGGveQlEFdYAV5wqqLCjaFTOGbeERkfKvpi9DLjgMe2yLTKvvTn0GsiapDVUXm8/EHq8oaEh5pbUyEDHoaZOC70fOOkypb4vZk85cSD4MUBb6b0bReS96+J9qDzV1hJ8kfjR0zVSuxsNBCx/6+cPoywSpAQYB8QEflO0U5VDqlboxMHgf4zW1dX5OrvD74OUIyxtOxDa17+OKkIDw2QxvZ4MaABLAtyIrcug0CCFWKxGmA2MB4YB3ShbpZqV/esnN9BEM8LXCBtkPudvsOZr7SrCHjYhZGJzEcEm3qtLgXNSxR39c5IbaGYEEd4F5gNbsNkgNaTlPt8tdCc+csiWKq5oEx3AJaniwf71HOeAKkITqxDWJ4p2Y7OVMJ/IYlz/JTwL30sJNkuIL2Zn6WAGxXShvCHVvNK//qCTWENMwWIbMDVR9CvQhLIP5ajUkNIpRYMU4mMmwgMos4G7EqFmYAXxS7PD+Bgvlfzo2QDEJzVTeTLRG/13jKeBL4BvEL4HzgMXiT8r/d1KHja5CPnAnSgTgQnEX3T6XymeRljDfHaJoNrIZgRbqkh6hPX0G9Wd5DCcZSiruPal0oUTKG9yG7tkGlFIfLhpbOcKy51+pUbrQIJ4FsoS4o8cow1obOBLYD/CDlnAVyZaUn7kU0XYx2RsZiFMTgyPQuBm4he5AvQQH1pngVMIR8nmqMzB9bZ5CEMYQnL8BQygqIiDkiJnAAAAAElFTkSuQmCC" style="vertical-align: bottom;" </img></a><br>` : ''}
				</div>
			`;
	
			// SET PRICE W/O FEES
			try {
				const walmartPriceNode = itemNode.querySelector('[class="price-group"]');
				const originalPriceNode = document.createElement('div');
				originalPriceNode.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(87, 114, 227); background: rgb(255, 232, 204); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; margin-top: 5px;';
				originalPriceNode.innerHTML = `
					$${detailsData.originalPrice}
					<span style="font-size: 7.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
				`;
				walmartPriceNode.appendChild(originalPriceNode);
			} catch { }
	};
	const doDelay = async milliSeconds => new Promise(resolution => setTimeout(resolution, milliSeconds));
	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	// TRIGGER
	const checkItems = () => {
		const itemNodes = document.querySelectorAll('div[class="mb1 ph1 pa0-xl bb b--near-white w-25"]');
		for (itemNode of itemNodes) {
			try {
				const walmartId = itemNode.querySelector('[href*="/ip/"]').href.match(/ip\/[^/]*\/([0-9]*)/).pop();
				itemNode.setAttribute('detailsChecked', true);
				itemNode.setAttribute('walmartId', walmartId);
				checkDetails(walmartId);
			} catch {
				itemNode.setAttribute('detailsChecked', true);
			}
		}
		
	};
	
	chrome.storage.local.get(['settingsData'], CS => {
		if (CS.settingsData.viewDetails) {
			checkItems();
			const interval = setInterval(() => {
				if (document.querySelectorAll('div[class="mb1 ph1 pa0-xl bb b--near-white w-25"]').length !== 0) {
					clearInterval(interval);
					checkItems();
				} 
			}, 1000);
		}
	});
})();

