// FUNCTIONS
const getOriginalPrice = (walmartPrice, estimatedCategory = 'Others') => {
    let originalPrice = '';
    try {
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
        const itemPrice = Number(walmartPrice);
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
    return originalPrice;
};

const checkDetails = async walmartId => {
    // GET DETAILS DATA
    const itemUrl = document.querySelector('[aria-label="back to item"]').href;
    chrome.runtime.sendMessage({
        getDetails: true,
        walmartId: walmartId,
        itemUrl: itemUrl
    }, detailsData => {
        // SET PRICE W/O FEES
        const offerNodes = document.querySelectorAll('.price.arrange-fit.price--stylized');
        for (offerNode of offerNodes) {
            const originalPriceNode = offerNode.querySelector('[walmartPrice]');
            originalPriceNode.innerHTML = `
                $${getOriginalPrice(originalPriceNode.getAttribute('walmartPrice'), detailsData.estimatedCategory)}
                <span style="font-size: 7.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
            `;
        }
    });
};

// TRIGGER
const checkOffers = () => {
    const offerNodes = document.querySelectorAll('.price.arrange-fit.price--stylized');
    for (offerNode of offerNodes) {
        const walmartPrice = Number(offerNode.querySelector('.price-group').innerText.match(/[0-9]+\.[0-9]+/));
        const originalPriceNode = offerNode.querySelector('[walmartPrice]') || document.createElement('div');   
        originalPriceNode.setAttribute('walmartPrice', walmartPrice);
        originalPriceNode.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(87, 114, 227); background: rgb(243, 250, 240); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; margin-top: 0.5px;';
        originalPriceNode.innerHTML = `
            $--.--
            <span style="font-size: 7.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
        `;
        offerNode.appendChild(originalPriceNode);
    }
    const walmartId = window.location.href.match(/product\/([0-9]*)/).pop();
    checkDetails(walmartId);
};

chrome.storage.local.get(['settingsData'], CS => {
    if (CS.settingsData.viewDetails) {
        checkOffers();
    }
});