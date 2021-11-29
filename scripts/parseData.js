const WALMART_ID = "F55CDC31AB754BB68FE0B39041159D63";

const getMin3rdPartyWFS = async (offers) => {
    const WFSPrices = [];
    Object.keys(offers).forEach(key => {
        if (offers[key].sellerId != WALMART_ID && offers[key].productAvailability == "IN_STOCK" && offers[key]?.wfsEnabled) WFSPrices.push(offers[key].pricesInfo.price);
    })
    return WFSPrices.sort((a, b) => { return a - b })[0] || 0;
}

const getMin3rdPartyPrice = (offers) => {
    const prices = [];
    for (let key in offers) {
        if (offers[key].sellerId != WALMART_ID && offers[key].productAvailability == "IN_STOCK" && !offers[key]?.wfsEnabled) prices.push(offers[key].pricesInfo.price);
    }
    return prices.sort((a, b) => { return a - b })[0] || 0;
}

const getWalmartOffer = (offers) => {
    for (let key in offers) {
        if (offers[key].sellerId == WALMART_ID) {
            if (offers[key].productAvailability == "IN_STOCK") {
                return offers[key].pricesInfo.price
            } else if (offers[key].productAvailability == "OUT_OF_STOCK") {
                return 0;
            }
        }
    }
    return 0;
}

const getAllVariations = () => {
    const url = window.location.href.match(/:\/\/([^?]*)/).pop();
    const baseURL = url.split('/')[0] + '/' + url.split('/')[1] + '/' + url.split('/')[2] + '/';
    chrome.storage.local.get(['htmlData'], async obj => {
        if (obj.htmlData) {
            const availableData = obj.htmlData.match(/"productId":"([^"]*)","usItemId":"([^"]*)","upc":"([^"]*)"/);
            if (availableData) {
                const distinctVariations = [];
                const variants = obj.htmlData.match(/"variants":\[(.*?)\]/g);
                let variantValues = [];
                variantValues = variants ? variants[0].match(/"value":"([^"]*)"/g) : null
                const variations = obj.htmlData.match(/{"productId":"([^"]*)","usItemId":"([^"]*)"}/g);
                const variationsWithUnitPrice = obj.htmlData.match(/{"productId":"([^"]*)","usItemId":"([^"]*)","unitPriceDisplayCondition":"([^"]*)"}/g)
                if (variations) {
                    for (let i = 0; i < variations.length; i++) {
                        if (!distinctVariations.includes(variations[i])) {
                            distinctVariations.push(variations[i]);
                        }
                    }
                }
                if (variationsWithUnitPrice) {
                    for (let i = 0; i < variationsWithUnitPrice.length; i++) {
                        if (!distinctVariations.includes(variationsWithUnitPrice[i])) {
                            distinctVariations.push(variationsWithUnitPrice[i]);
                        }
                    }
                }
                if (distinctVariations.length) {
                    await sendTimeSeriesObject(baseURL, availableData[2], distinctVariations);
                    await getAllTimeSeriesObjects(distinctVariations, baseURL)
                } else {
                    await sendTimeSeriesObject(baseURL, availableData[2], "");
                }

            }
        }
    })
}

const getAllTimeSeriesObjects = async (variations, url) => {
    const baseURL = url.split('/')[0] + '/' + url.split('/')[1] + '/' + url.split('/')[2] + '/';
    for (let i = 0; i < variations.length; i++) {
        if (i % 10 == 0) await sleep(10);
        let id = variations[i].split(':"')[2].split('"')[0];
        await sendTimeSeriesObject(baseURL, id, variations);
    }
}

const getVariations = (variations) => {
    const variationIds = [];
    for (let i = 0; i < variations.length; i++) {
        let id = variations[i].split(':"')[2].split('"')[0];
        variationIds.push(id);
    }
    return variationIds;
}

const sendTimeSeriesObject = async (baseURL, id, variations) => {
    const variationIds = getVariations(variations);
    const productResponse = await getLocal(id);
    const productData = await extractProductScript(productResponse);
    const sellersResponse = await fetch(`https://www.walmart.com/product/${id}/sellers`);
    const sellersResponseText = await sellersResponse.text();
    const sellersData = await extractSellersData(sellersResponseText);
    const timeSeriesObject = await createTimeSeriesObject(productData, sellersData, variationIds);
    await sendToSQS(timeSeriesObject);
}

const extractProductScript = (response) => {
    let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    let i = 0;
    while ((match = re.exec(response))) {
        i++;
        let data = match[1].replace(/\s+/g, "");
        if (i === 19) {
            let productData = JSON.parse(data);
            return productData;
        }
    }
}

const sendToSQS = async (data) => {
    await fetch("https://licenses.sceptermarketing.com/timeseries/sendTimeseries", {
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({
            data
        }),
        "method": "POST"
    }).then((response) => {
        switch (response.status) {
            case 200:
                return response.text();
            case 404:
                throw response;
        }
    })
}

const extractSellersData = (response) => {
    let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    let i = 0;
    while ((match = re.exec(response))) {
        i++;
        let data = match[1].replace(/\s+/g, "");
        if (i === 19) {
            var sellersData = JSON.parse(data);
            return sellersData;
        }
    }
}

const getOffers = async (productData, sellersData) => {
    const offers = sellersData.item.product.offers;
    const parsedOffers = {};
    for (const offerId in offers) {
        if (offers[offerId].productAvailability.availabilityStatus == 'IN_STOCK' || offers[offerId].sellerId == WALMART_ID) {
            const parsedOffer = await getParsedOffer(offers[offerId]);
            if (parsedOffer) parsedOffers[offerId] = parsedOffer;
        }
    }
    const buyBoxOfferId = productData.item.product.buyBox.products[0].offerId;
    if (buyBoxOfferId) parsedOffers[buyBoxOfferId]["buyBox"] = true;
    return parsedOffers;

}

const getParsedOffer = async (offer) => {
    const filterData = ["actionStatus", "addToCart", "badges", "containsHolidayMessaging", "fulfillment", "airShippable", "giftingOptions", "geoItemClassification", "hasFreightShipping", "highlightedPickupMethod", "internationalShippingEligible", "offerPUTEligible", "offerInfo", "ormd", "personalizationData", "pickupTodayEligible", "priceFlagsList", "removeATC", "quantity", "shipAsIs", "showBuyNow", "showFreeTrial", "sourcePickupDiscountEligible", "status", "twoDayShippingEligible", "unitPriceDisplayValue", "upsellFulfillmentOption"]
    filterData.forEach((key) => {
        delete offer[key];
    });
    //const offerInfo = await getParsedOfferInfo(offer.offerInfo);
    const pricesInfo = await getParsedPriceInfo(offer.pricesInfo);
    //offer.offerInfo = offerInfo;
    offer.pricesInfo = pricesInfo;
    if (offer.productAvailability) {
        offer.productAvailability = offer.productAvailability.availabilityStatus;
    }
    return offer;
}

const getParsedOfferInfo = (offerInfo) => {
    const filterData = ["callToAction", "globalTaxCode", "offerId", "offerMarketAttributes", "preorderInfo", "purchaseOption", "shippingPassEligible", "showSoldBy"];
    filterData.forEach((key) => {
        delete offerInfo[key];
    });
    return offerInfo;
}

const getParsedPriceInfo = (pricesInfo) => {
    return {
        currencyUnit: pricesInfo.priceMap.CURRENT.currencyUnit,
        price: pricesInfo.priceMap.CURRENT.price
    }
}

const getBuyBoxInfo = (productData, sellersData) => {
    const offerId = productData.item.product.buyBox.products[0].offerId;
    const buyBoxOffer = sellersData.item.product.offers[offerId];
    const sellerId = sellersData.item.product.offers[offerId].sellerId;
    const buyBoxSeller = sellersData.item.product.sellers[sellerId];
    return { buyBoxOffer, buyBoxSeller };
}

const getWeight = (specs) => {
    let weight = specs.find(item => item.name == "AssembledProductWeight");
    return weight?.value || null;
}

const getBrand = (specs) => {
    let brand = specs.find(item => item.name == "Brand");
    return brand?.value || null;
}

const getMPN = (specs) => {
    let mpn = specs.find(item => item.name == "ManufacturerPartNumber");
    return mpn?.value || null;
}

const getTitle = (url) => {
    return url.split('/')[2] || '';
}

const parseVariantAttributes = (variantAttributes) => {
    const obj = {};
    variantAttributes.forEach(item => {
        const key = item.value.split('-')[0];
        const value = item.value.split('-')[1];
        obj[key] = value;
    })
    return obj;
}

const createTimeSeriesObject = async (productData, sellersData, variationIds) => {
    const product = productData.item.product.buyBox.products[0];
    const productId = product.usItemId;
    const offers = await getOffers(productData, sellersData);
    const buyBoxOfferId = product.offerId;
    const categoryTree = product.categoryPath;
    const upc = product.upc;
    const brand = getBrand(product.idmlSections.specifications);
    const model = product.model || null;
    const weight = getWeight(product.idmlSections.specifications);
    const mpn = getMPN(product.idmlSections.specifications);
    const description = product.shortDescription || "" + product.detailedDescription || "";
    const variantAttributes = parseVariantAttributes(product.variants) || {};
    const title = getTitle(product.canonicalUrl)
    const productInfo = {
        itemId: productId,
        categoryTree: categoryTree,
        title,
        upc,
        brand,
        model,
        weight,
        mpn,
        description,
        variantAttributes,
        variationIds
    }
    const timeSeries = {
        priceInfo: {}
    };
    timeSeries["productInfo"] = productInfo;
    timeSeries["priceInfo"]["buyBoxPrice"] = offers[buyBoxOfferId].pricesInfo.price;
    timeSeries["priceInfo"]["3rdPartyWFS"] = await getMin3rdPartyWFS(offers);
    timeSeries["priceInfo"]["walmartPrice"] = await getWalmartOffer(offers);
    timeSeries["priceInfo"]["3rdPartyFBM"] = await getMin3rdPartyPrice(offers);
    timeSeries["offers"] = offers;
    return timeSeries;
}

const extractTimeSeriesData = async () => {
    chrome.storage.local.set({
        "htmlData": null
    })
    chrome.storage.local.get(['htmlData'], async obj => {
        console.log(obj.htmlData)
        if (obj.htmlData) {
            await getAllVariations();
        } 
    })

}

extractTimeSeriesData();

