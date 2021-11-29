// MAIN
(function () {
  let mainUPC = [];
  const WALMART_ID = "F55CDC31AB754BB68FE0B39041159D63";

  const sleep = (s) => {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
  }

  const getOriginalPrice = productData => {
    let originalPrice = '';
    const { product } = productData.props.pageProps.initialData.data;
    try {
      const itemCategory = product.ironBankCategory;
      const categoryPath = product.category.categoryPathId;
      const categories = ['Automotive & Powersports', 'Camera & Photo', 'Cell Phones', 'Consumer Electronics', 'Industrial & Scientific', 'Major Appliances', 'Musical Instruments', 'Personal Computers', 'Tires & Wheels', 'Video Game Consoles', 'Jewelry', 'Watches'];
      const estimatedCategory = (categories.filter(category => `${itemCategory}|${categoryPath}`.match(new RegExp(category, 'i')))).pop() || 'Others';
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
    return originalPrice;
  };

  const getOfferPrice = (itemPrice, productData) => {
    let originalPrice = '';
    const { product } = productData.props.pageProps.initialData.data;
    try {
      const itemCategory = product.ironBankCategory;
      const categoryPath = product.category.categoryPathId;
      const categories = ['Automotive & Powersports', 'Camera & Photo', 'Cell Phones', 'Consumer Electronics', 'Industrial & Scientific', 'Major Appliances', 'Musical Instruments', 'Personal Computers', 'Tires & Wheels', 'Video Game Consoles', 'Jewelry', 'Watches'];
      const estimatedCategory = (categories.filter(category => `${itemCategory}|${categoryPath}`.match(new RegExp(category, 'i')))).pop() || 'Others';
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

  const viewUPCs = data => {
    document.querySelector(`[extension-url="${window.activeUrl}"]`).innerHTML = `<table id="viewUpcTable" style="width: 100%;"></table>`;
    data.availableUPCs?.forEach((attributes, index) => {
      var attributesNode = document.createElement("tr");
      for (const [i, attribute] of attributes.entries()) {
        attributesNode.innerHTML += (index === 0) ? `
          <th style="vertical-align: top; cursor: text; user-select: all; ">${attribute}</th>
      ` : (i == 2 && attribute != "Not Found") ? `
        <td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;">${attribute}<a href="https://www.amazon.com/s?k=${attribute}&tag=scepter03-20" target="_blank"><img height="25" title="View this Product on Amazon!" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFK0lEQVRoge2ZW2xUVRSGv3WmFwqlxcpFTVpFAwZDiKE4pRihidBCoReRYoKKGBKMGhMJ8iJEB4OakBgNiRh4AI0QLcUw03JrQcEIoS2pAa8PKJJGFBEt1EqZmc5ZPswoWOe05+wZHkz6P+6117///+y9z77BEIYwhP81JG1MgYDlbz1Vgto1gkxF9R6EkUAe0AVcUPQUKq2ZqvXHDjb+lI5m02Jg+tzqhaqyHpjkMqUPIWhlxJ4/vmfPuVTaTslAWVnZsN7s/HeAZYYUv4vKY60twf2mGizTRAIBqzc7/wPMxQMUKPqRf071NFMCYwP+4ydfAGpN8/+BkCOWtRnD0WCUVFpRV2ATOQPkm+Qng8LM9ubQZ17zjHogJuHlDCy+HssuzcjWvCwrayzCs8ClgThFZZ6JlgyTpIEb07famhtXXlfwB7DJX/5Qp4jd5EzK3SZazOaAMt2hvDccttYlC7W37N4L/OnIKVpkIsWoBxRZIuhsQW9XpAgoAkapsOPkkaDTUFHgMjDCIVxgosXIQHtLMAgEry8rK6vLHTOG3nYTQkBUjLQYJSXDkSMNPankq+IzyUubgdKKugKVaDWqJSoyEdUiIJP4XgjgpgEJxOyXnrKBkvLaYkRfsolUogk+1VRpXSMVAzJ9bu3LqroWzLo/HTA24K+ofltVn06nGBMYGfCXVz8hyEDiv1PV7ZbIMcuSH9TO7OrOoye3OxI21OkIzwaKq6qGS0Q2OMUVXo1dHLeuo2NL9F95xSsyGf2LicYB4dlARlQWAmOTBpUP21tCa5OFskZ3jbS9NuYC3rcSKuWOIcva6BSL0VfouS0X8GxAYbJTLHJVv3VsSHXGINSjvGoBAwMywII0Micz0ylNRQc7uQ2/r7LyFq96THajV50CEY3UJSv3V9SuBvyDEUssY5FXMZ6X75KKmk+BmQ7hHhF5LsMXDQHEohmTYhbPiPKoS/qf+2JZkzoONVx2q8f7OqC0IY4GclV1W7QvQSsg3nYVt/p84S3AI24TvM8B1ZDXHE/8yOKSOQsmuK3v2UDrwcZjwGGveQlEFdYAV5wqqLCjaFTOGbeERkfKvpi9DLjgMe2yLTKvvTn0GsiapDVUXm8/EHq8oaEh5pbUyEDHoaZOC70fOOkypb4vZk85cSD4MUBb6b0bReS96+J9qDzV1hJ8kfjR0zVSuxsNBCx/6+cPoywSpAQYB8QEflO0U5VDqlboxMHgf4zW1dX5OrvD74OUIyxtOxDa17+OKkIDw2QxvZ4MaABLAtyIrcug0CCFWKxGmA2MB4YB3ShbpZqV/esnN9BEM8LXCBtkPudvsOZr7SrCHjYhZGJzEcEm3qtLgXNSxR39c5IbaGYEEd4F5gNbsNkgNaTlPt8tdCc+csiWKq5oEx3AJaniwf71HOeAKkITqxDWJ4p2Y7OVMJ/IYlz/JTwL30sJNkuIL2Zn6WAGxXShvCHVvNK//qCTWENMwWIbMDVR9CvQhLIP5ajUkNIpRYMU4mMmwgMos4G7EqFmYAXxS7PD+Bgvlfzo2QDEJzVTeTLRG/13jKeBL4BvEL4HzgMXiT8r/d1KHja5CPnAnSgTgQnEX3T6XymeRljDfHaJoNrIZgRbqkh6hPX0G9Wd5DCcZSiruPal0oUTKG9yG7tkGlFIfLhpbOcKy51+pUbrQIJ4FsoS4o8cow1obOBLYD/CDlnAVyZaUn7kU0XYx2RsZiFMTgyPQuBm4he5AvQQH1pngVMIR8nmqMzB9bZ5CEMYQnL8BQygqIiDkiJnAAAAAElFTkSuQmCC" style="vertical-align: bottom;" </img></a></td>
    ` : (i == 1) ? `<td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;"><a href="http://www.jdoqocy.com/click-1245-13405112?sid=Test" target="_blank" style="text-decoration: none; color: black;">${attribute}</a></td>` :
          `
          <td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;">${attribute}</td>
      `
      }
      document.querySelector('[extension-node="true"] table')?.appendChild(attributesNode);
    });
    var poweredBy = document.querySelector(['[id="poweredBy"]']) || document.createElement("div");
    poweredBy.style.textAlign = "right";
    poweredBy.id = 'poweredBy';
    poweredBy.innerHTML = ` <span style="font-size: 12.5px; display: block; line-height: 2em; letter-spacing: 0.5px;">Powered By <a href="https://www.ecomcircles.com/" target="_blank">EcomCircles</a></span>`;
    insertAfter(document.querySelector('[extension-node="true"]'), poweredBy);

  };

  const exportUPCs = (availableUPCs) => {
    let csv = "Product ID, Item ID, UPC, Attributes \n" + mainUPC[0] + ',' + mainUPC[1] + ',' + mainUPC[2] + ',' + mainUPC[3] + '\n';
    availableUPCs.forEach(function (row) {
      csv += row.join(',');
      csv += "\n";
    });
    csv.replace('<br/>', '');
    const product = window.activeUrl.split('/')[2]
    const prodNode = document.querySelector("div[class='h-100 relative']");
    let link = document.querySelector(['[id="exportLink"]']) || document.createElement("a");
    link.id = 'exportLink';
    link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodeURI(csv));
    link.setAttribute("download", `${product}.csv`);
    link.innerText = " -> Export UPCs";
    link.style.display = 'block';
    link.style.textDecoration = 'none';
    link.style.color = 'blue';
    link.style.fontSize = '15px';
    link.addEventListener('click', () => {
      console.log("Downloaded!");
    })
    prodNode.appendChild(link);
  }

  const viewDemoUPCs = data => {
    chrome.storage.local.get(["DemoCount"], (CS) => {
      if (CS.DemoCount < 5) {
        document.querySelector('[extension-node="demo"]').innerHTML = `<table style="width: 100%;"></table>`;
        data.forEach((attributes, index) => {
          var attributesNode = document.createElement("tr");
          for (attribute of attributes) {
            attributesNode.innerHTML += (index === 0) ? `
                <th style="vertical-align: top; cursor: text; user-select: all;">${attribute} (Demo)</th>
            ` : `
                <td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all;">${attribute}</td>
            `
          }
          document.querySelector('[extension-node="demo"] table').appendChild(attributesNode);
        });
        var poweredBy = document.querySelector(['[id="poweredBy"]']) || document.createElement("div");
        poweredBy.style.textAlign = "right";
        poweredBy.id = 'poweredBy';
        poweredBy.innerHTML = ` <span style="font-size: 12.5px; display: block; line-height: 2em; letter-spacing: 0.5px;">Powered By <a href="https://www.ecomcircles.com/" target="_blank">Ecom Circles</a></span>`;
        insertAfter(document.querySelector('[extension-node="demo"]'), poweredBy);
        inc();
      } else {
        const originalPriceNode = document.querySelector('[id="originalPriceNode"]') || document.createElement('div');
        originalPriceNode.style = 'display=none;';
        document.querySelector('[extension-node="demo"]').innerHTML = `<table style="width: 100%;"></table>`;
        var attributesNode = document.createElement("tr");
        attributesNode.innerHTML = `
          <td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all;">You have used your 5 free lookups for today. Please subscribe by clicking the link above to get unlimited UPC lookups along with the rest of our tools.</td>`
        document.querySelector('[extension-node="demo"] table').appendChild(attributesNode);
      }

    })
    checkDate();
  };

  function inc() {
    chrome.storage.local.get(['DemoCount'], function (item) {
      chrome.storage.local.set({ 'DemoCount': item.DemoCount + 1 }, function () { });
    });
  }

  function checkDate() {
    let currDate = new Date();
    chrome.storage.local.get(['Time'], (item) => {
      let pastDate = new Date(item.Time);
      if (24 <= currDate.getHours() - pastDate.getHours()) {
        chrome.storage.local.set({ 'DemoCount': 0 }, function () { });
        chrome.storage.local.set({ 'Time': Date.now() }, () => { });
      } else {
      }
    })
  }

  function showAttributes(attributes) {
    if (!attributes) return [];
    return attributes.join('<br/>').replaceAll('"value":', '').replaceAll('"', ' ').replaceAll('_', ' ').replaceAll('-', ': ')

  }

  const getDemoWalmartUPCs = async () => {
    if (!window.allUPCs) window.allUPCs = {};
    if (availableUPCs = allUPCs[window.activeUrl]) return availableUPCs; else {
      const productResponse = await fetch(`https://${window.activeUrl}`);
      const productResponseText = await productResponse.text();
      let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
      let match;
      let productData;
      let i = 0;
      while ((match = re.exec(productResponseText))) {
        i++;
        let data = match[1].replace(/\s+/g, "");
        if (data.includes('props')) {
          productData = JSON.parse(data);
        }
      }
      const { product } = productData.props.pageProps.initialData.data;
      const { id, usItemId, upc } = product;
      let availableUPCs = [['Product ID', 'Item ID', 'UPC']];
      availableUPCs.push([id, usItemId, upc]);
      mainUPC.push(id, usItemId, upc);
      mainProduct = product;
      allUPCs[window.activeUrl] = availableUPCs;
      return availableUPCs;
    }


  };

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  // SALES RANK FUNCTION 

  // function setRank(rank) {
  //   const prodNode = document.querySelector(".prod-ProductTitle");
  //   var rankNode = document.querySelector('[id="rank"]') || document.createElement("div");
  //   rankNode.style.textAlign = "left";
  //   rankNode.id = "rank";
  //   rankNode.innerHTML = `<span style="display: inline-block; border-radius: 5px; border-style: solid; border-color: rgb(255, 138, 0); background: rgb(255, 232, 204); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; ;">Rank: ${rank} </span>`
  //   prodNode.appendChild(rankNode);
  // }

  // const checkRestrictedBrand = async () => {
  //     const brandNode = document.querySelector(".prod-brandName");
  //     var warningNode = document.createElement("span");
  //     warningNode.innerHTML = `<span style="font-size: 17px; color: red; display: block; line-height: 2em; letter-spacing: 0.75px;"> Restricted = Walmart doesn't allow this item / brand to be listed</span>`
  //     console.log(brandNode.innerText);
  //     const res = restrictedBrands.filter(data => data.Name.toLowerCase() == brandNode.innerText.toLowerCase() )
  //     if (res.length) {
  //         brandNode.appendChild(warningNode); 
  //     }
  // }

  const getWalmartUPCs = async (productData) => {
    if (!window.allUPCs) window.allUPCs = {};
    if (availableUPCs = allUPCs[window.activeUrl]) return availableUPCs;
    else {
      const { product } = productData.props.pageProps.initialData.data;
      const { id, usItemId, upc, variants } = product;

      const sellersData = await getSellerData(usItemId);
      const timeSeriesObject = await createTimeSeriesObject(productData, sellersData);
      if (timeSeriesObject) {
        await sendToSQS(timeSeriesObject);
      }

      if (variants) {
        const distinctVariations = variants.map(item => item.usItemId);
        if (distinctVariations.length) {
          getAllVariationsUPC(distinctVariations, window.activeUrl)
        }
      }
      let variantValues = [];
      variantValues = product.selectedVariantIds;
      let availableUPCs = [['Product ID', 'Item ID', 'UPC', 'Attributes']];
      availableUPCs.push([id, usItemId, upc, showAttributes(variantValues)]);
      mainUPC.push(id, usItemId, upc, showAttributes(variantValues));
      allUPCs[window.activeUrl] = availableUPCs;
      return { availableUPCs };
    }

  };

  const getAllVariationsUPC = async (variations, url) => {
    const baseURL = url.split('/')[0] + '/' + url.split('/')[1] + '/' + url.split('/')[2] + '/';
    let availableUPCs = [];
    for (let index = 0; index < variations.length; index++) {
      if (index % 10 == 0) await sleep(10);
      const productResponse = await fetch(`https://${baseURL + variations[index]}`);
      const productResponseText = await productResponse.text();
      let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
      let match;
      let productData;
      let i = 0;
      while ((match = re.exec(productResponseText))) {
        i++;
        let data = match[1].replace(/\s+/g, "");
        if (data.includes("props")) {
          productData = JSON.parse(data);

          const { product } = productData.props.pageProps.initialData.data;
          const { usItemId } = product;
          if (usItemId) {
            const sellersData = await getSellerData(usItemId);
            const timeSeriesObject = await createTimeSeriesObject(productData, sellersData);
            if (timeSeriesObject) {
              await sendToSQS(timeSeriesObject);
            }
          }
        }
      }
      const { product } = productData.props.pageProps.initialData.data;
      const { id, usItemId, upc } = product;
      let variantValues = [];
      variantValues = product.selectedVariantIds;
      availableUPCs.push([id, usItemId, upc, showAttributes(variantValues)]);
    }
    setTimeout(() => {
      availableUPCs.forEach((attributes, index) => {
        var attributesNode = document.createElement("tr");
        for (const [i, attribute] of attributes.entries()) {
          if (i == 2) {
            attributesNode.innerHTML += `
                <td style="vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;">${attribute}<a href="https://www.amazon.com/s?k=${attribute}&tag=scepter03-20" target="_blank"><img height="25" title="View this Product on Amazon!" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFK0lEQVRoge2ZW2xUVRSGv3WmFwqlxcpFTVpFAwZDiKE4pRihidBCoReRYoKKGBKMGhMJ8iJEB4OakBgNiRh4AI0QLcUw03JrQcEIoS2pAa8PKJJGFBEt1EqZmc5ZPswoWOe05+wZHkz6P+6117///+y9z77BEIYwhP81JG1MgYDlbz1Vgto1gkxF9R6EkUAe0AVcUPQUKq2ZqvXHDjb+lI5m02Jg+tzqhaqyHpjkMqUPIWhlxJ4/vmfPuVTaTslAWVnZsN7s/HeAZYYUv4vKY60twf2mGizTRAIBqzc7/wPMxQMUKPqRf071NFMCYwP+4ydfAGpN8/+BkCOWtRnD0WCUVFpRV2ATOQPkm+Qng8LM9ubQZ17zjHogJuHlDCy+HssuzcjWvCwrayzCs8ClgThFZZ6JlgyTpIEb07famhtXXlfwB7DJX/5Qp4jd5EzK3SZazOaAMt2hvDccttYlC7W37N4L/OnIKVpkIsWoBxRZIuhsQW9XpAgoAkapsOPkkaDTUFHgMjDCIVxgosXIQHtLMAgEry8rK6vLHTOG3nYTQkBUjLQYJSXDkSMNPankq+IzyUubgdKKugKVaDWqJSoyEdUiIJP4XgjgpgEJxOyXnrKBkvLaYkRfsolUogk+1VRpXSMVAzJ9bu3LqroWzLo/HTA24K+ofltVn06nGBMYGfCXVz8hyEDiv1PV7ZbIMcuSH9TO7OrOoye3OxI21OkIzwaKq6qGS0Q2OMUVXo1dHLeuo2NL9F95xSsyGf2LicYB4dlARlQWAmOTBpUP21tCa5OFskZ3jbS9NuYC3rcSKuWOIcva6BSL0VfouS0X8GxAYbJTLHJVv3VsSHXGINSjvGoBAwMywII0Micz0ylNRQc7uQ2/r7LyFq96THajV50CEY3UJSv3V9SuBvyDEUssY5FXMZ6X75KKmk+BmQ7hHhF5LsMXDQHEohmTYhbPiPKoS/qf+2JZkzoONVx2q8f7OqC0IY4GclV1W7QvQSsg3nYVt/p84S3AI24TvM8B1ZDXHE/8yOKSOQsmuK3v2UDrwcZjwGGveQlEFdYAV5wqqLCjaFTOGbeERkfKvpi9DLjgMe2yLTKvvTn0GsiapDVUXm8/EHq8oaEh5pbUyEDHoaZOC70fOOkypb4vZk85cSD4MUBb6b0bReS96+J9qDzV1hJ8kfjR0zVSuxsNBCx/6+cPoywSpAQYB8QEflO0U5VDqlboxMHgf4zW1dX5OrvD74OUIyxtOxDa17+OKkIDw2QxvZ4MaABLAtyIrcug0CCFWKxGmA2MB4YB3ShbpZqV/esnN9BEM8LXCBtkPudvsOZr7SrCHjYhZGJzEcEm3qtLgXNSxR39c5IbaGYEEd4F5gNbsNkgNaTlPt8tdCc+csiWKq5oEx3AJaniwf71HOeAKkITqxDWJ4p2Y7OVMJ/IYlz/JTwL30sJNkuIL2Zn6WAGxXShvCHVvNK//qCTWENMwWIbMDVR9CvQhLIP5ajUkNIpRYMU4mMmwgMos4G7EqFmYAXxS7PD+Bgvlfzo2QDEJzVTeTLRG/13jKeBL4BvEL4HzgMXiT8r/d1KHja5CPnAnSgTgQnEX3T6XymeRljDfHaJoNrIZgRbqkh6hPX0G9Wd5DCcZSiruPal0oUTKG9yG7tkGlFIfLhpbOcKy51+pUbrQIJ4FsoS4o8cow1obOBLYD/CDlnAVyZaUn7kU0XYx2RsZiFMTgyPQuBm4he5AvQQH1pngVMIR8nmqMzB9bZ5CEMYQnL8BQygqIiDkiJnAAAAAElFTkSuQmCC" style="vertical-align: bottom;" </img></a></td>
            `
          } else if (i == 1) {
            attributesNode.innerHTML += `
            <td style=" font-weight: bold; vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;"><a href="http://www.jdoqocy.com/click-1245-13405112?sid=Test" target="_blank" style="text-decoration: none; color: black;">${attribute}</a></td>
            `

          } else attributesNode.innerHTML += `
                    <td style="vertical-align: top; cursor: text; user-select: all; text-transform: capitalize;">${attribute}</td>
                `

        }
        document.querySelector('[extension-node="true"] table')?.appendChild(attributesNode);
      });
      exportUPCs(availableUPCs);
    }, (variations.length + 5) * 1000);

  }

  const setPrice = productData => {
    const priceInterval = setInterval(() => {
      const offerNodes = document.querySelectorAll('div[data-testid="allSellersOfferLine"]')
      if (offerNodes.length) {
        clearInterval(priceInterval);
        let count = 0;
        // SET PRICE W/O FEES
        for (offerNode of offerNodes) {
          count++;
          try {
            const walmartPrice = Number(offerNode.querySelector('div[class="b f4"').innerText.replace(/[^0-9x \.]+/g, ""));
            const originalPriceNode = document.querySelector(`[id="originalPriceNode${count}"]`) || document.createElement('div');
            originalPriceNode.id = `originalPriceNode${count}`;
            originalPriceNode.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(87, 114, 227); background: rgb(215, 219, 235); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; margin-top: 5px;';
            originalPriceNode.innerHTML = `
                  $${getOfferPrice(walmartPrice, productData)}
                  <span style="font-size: 11.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
              `;
            offerNode.appendChild(originalPriceNode);
          } catch { }

        }

      }
    }, 500)

  }

  const addExtensionNode = async () => {
    // VIEWER AREA
    var viewerNode = document.createElement("div");
    viewerNode.setAttribute("extension-node", "true");
    viewerNode.setAttribute("extension-url", window.activeUrl);
    viewerNode.style = `border-radius: 7.5px; border: 1px solid rgb(173, 184, 214); background: rgb(215, 219, 235);`;
    viewerNode.innerHTML = `<div class="loading-animation"></div>`
    const targetNode = document.querySelector('div[class="h-100 relative"]');
    if (!targetNode) return;
    targetNode.parentNode.insertBefore(viewerNode, targetNode.nextSibling);

    //PRODUCT DATA
    const productResponse = await fetch(`https://${window.activeUrl}`);
    const productResponseText = await productResponse.text();
    let re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    let productData;
    let i = 0;
    while ((match = re.exec(productResponseText))) {
      i++;
      let data = match[1].replace(/\s+/g, "");
      if (data.includes("props")) {
        productData = JSON.parse(data);
      }
    }
    // SET PRICE W/O FEES
    try {
      const walmartPriceNode = document.querySelector('div[data-testId="add-to-cart-price-atf"');
      const originalPriceNode = document.querySelector('[id="originalPriceNode"]') || document.createElement('div');
      originalPriceNode.id = 'originalPriceNode';
      originalPriceNode.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(87, 114, 227); background: rgb(215, 219, 235); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; margin-top: 5px;';
      originalPriceNode.innerHTML = `
                $${getOriginalPrice(productData)}
                <span style="font-size: 11.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
            `;
      walmartPriceNode.appendChild(originalPriceNode);
    } catch { }

    //ALL OFFERS
    document.querySelector('[aria-label="Compare all sellers"]')?.addEventListener('click', () => setPrice(productData));
    // UPC EXTRACTION
    if (window.location.href.indexOf("walmart.com/ip/") !== -1) {
      getWalmartUPCs(productData).then(availableUPCs => viewUPCs(availableUPCs));
      getCatagoryPaths(productData);
      changeBrandingStatus(productData);
    }

    //checkRestrictedBrand();


  };

  const addDemoNode = () => {
    const currentUrl = window.location.href.match(/:\/\/([^?]*)/).pop();
    if (window.activeUrl !== currentUrl) window.activeUrl = currentUrl;

    // VIEWER AREA
    var viewerNode = document.createElement("div");
    viewerNode.setAttribute("extension-node", "demo");
    viewerNode.style = `border-radius: 7.5px; border: 1px solid rgb(87, 114, 227); background: rgb(215, 219, 235);`;
    viewerNode.innerHTML = `<div class="loading-animation"></div>`;
    const targetNode = document.querySelector('#messageNode');
    targetNode.parentNode.insertBefore(viewerNode, targetNode.nextSibling);
    // UPC EXTRACTION
    if (window.location.href.indexOf("walmart.com/ip/") !== -1) {
      getDemoWalmartUPCs().then(availableUPCs => viewDemoUPCs(availableUPCs));
    }

    // SET PRICE W/O FEES
    try {
      const walmartPriceNode = document.querySelector('[class*="PriceSection"] [class="price-group"]');
      const originalPriceNode = document.querySelector('[id="originalPriceNode"]') || document.createElement('div');
      originalPriceNode.id = 'originalPriceNode';
      originalPriceNode.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(215, 219, 235); background: rgb(215, 219, 235); margin-left: 5px; padding: 1.5px 2.5px 2.5px 3.5px; line-height: 1em; vertical-align: top; margin-top: 5px;';
      originalPriceNode.innerHTML = `
                $${getOriginalPrice(document.documentElement.innerHTML)}
                <span style="font-size: 7.5px; display: block; line-height: 1em; letter-spacing: 0.25px;">W/O Fees</span>
            `;
      walmartPriceNode.appendChild(originalPriceNode);
    } catch { }
  };

  const addMessage = () => {
    // VIEWER AREA
    var viewerNode = document.createElement("div");
    viewerNode.id = 'messageNode';
    viewerNode.style.width = 'fit-content'
    viewerNode.innerHTML = `<img height="20%" width="20%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4rSURBVHgB7Z1rbFTHFcfP3F0b/CAhFJs4qAKkJJUCkdPm0W9xVL5ESROrzaOQDxAVqVWriAiDo6IWQp1ISDwbRCK1khFQifBIGtEKlC9UrPqpJKigNEh9CVsVMazBGLCNCbt3Mv+7vrvr9d07c+++7t07P8lar/fuy/OfM+ecOTPDOOcx0kQWgzSRRgsg4mgBRBwtgIijBRBxtAAijhZAxNECiDhaABFHCyDiaAFEHC2AiKMFEHG0ACJOnELGG1svzZ24Gb83laLFaW7O5Sa7N/9xZvAbMWaMxllstPm+O4N7Ny4cJU1RWFDrAdDQN0finXfT1Gly3snJfIw4WyQemkveGBXfclB81QEhjERDjM7fMy91XgsjQ6AE8NONVxbdvkPdomd3E6dO8t7Y6jBKGIwnmuONx/dtm3+eIkrNBYCefnWYrTU56xKN3kU1gDE2QMz8c8us2Hv7ti4YpAhRMwGs6r3SNZkyN9eq0YsiLEPM4Ac/3PnAAYoAVRdAYBu+AFgFwzDfqXchVE0AYWn4QupdCBUXwOub/r94YizeH7aGLwRCaJnNltebj1BRAazsGVqbNmkzldmbb58Xo+Ymg9rEbUsTm/bY8Eg6e5uc+r2ciDzDnrY23lcvYWRFBFCuXt8iGnnxwjgtWtggbhvokQcbrcb3wsCluzR+m9OF/94RP1+L+ylx36RSqCdrUHYBrNgw1G2mqJ989no0etdTTfTko7NpiWj05oIeXg6+FEJInJmwBFGKlTAM3nd41wN9FGLKKoAVPV9tNk22mXywVPTul5+dU7FGL4YthtNnbpMfwj4klEUASOYMJ2M7xWutJo88I3r7c12tlqmvJfAZjn16y5cQwjwklCwANH4yyU6JPH2nl+fBxL/+o3ssRy5I+BVCWEVQkgDg7I2PxU8xTotUnwNnbrVoeJj8IAMh7P/kJn32xaTyc8IoAt8CQM+/kjTOemn8V8QY/8qzrRQmYAk+EhZB1VkMmwh8CcCr2UfotmHNfVbvDyOwBr/de60uReCrIiiZNPpVGx+mfltvW2gbH8BP2bu53bJgKohOtXhsMv0ndBQKOJ5db4R6ovG7Va4No8l3w/4ucBKliA4irCTyIS9RgPE0BKzoubzKNPk+lWvrrfHzgV/wwSG1sD/oySJlAVjp3Vvxz0khw1fPjW/jRQTxBmP5oe0LEhRAlH0AhHukGz8LEli/fE1tiE+neH9Q/QElAWDcVwn3otL4NhABchoy4BQOD/tLkVcaqQBg+lXy+8jsRanxbZ7vahGp7Bbpddxka1/rvRK4mghpFHB7rGGT+Piu1yDOf12hJ9Qr+O6DYtoZE0tuYCgQNw8W/h3V0FjnkErzrJXNrm+I00Al8wmuTqCq1/++iJGDltOvNkgW9W6/ShOSWgNEBY2xWOJOOt3NUS+httZhlBidr0QZu6sAXlk39D/Z2B+1cd8NzBts779OlcauU2xqjJ0u1ToUFYBK72+fypBpckAAXiaQSgFCYMw8OL+N7/Fbj1DUCUxz/jZJePuNb5FmOvAHUK9YDRBdwEEfTsY+X7n+K8+1GMDxk6KEW2b6EQJFfdx3Av+T57uaqZpACOk06//Jusue8w2OAphMmWtJgurESNRAEeqJxATVAlRkwRogqlB9zgwBIO4XUZ/rZI/u/c6cPjNBbylEApUE1mB8kp9SFcGMPMCd8fiLsid57f0/f+M31u3j311GP1uzgra8u4ce6Ginx7+3jP7Qf5i2/HotdYj79nVg/Ztr6OGHltC//3ORdr7XTytffYGeefr7dGtsnDb8aqvj+9jX2O/5w+d+QC+In7+c/Csl/vZ32rF144zP5PTev9/7LnkFjt8Hh26QH1qm1jjk10UirEQ5OyyKVzIiIIhAWpMwQwCmVdhZvCoX8/tee//Zf/zTuu24PxMxnD2H+8uoYyiZfSz/OnDr1njmVjQ4/o6GtP+ef10+9jX2a0FwYEi8z7+EkJw+U7H7XkBjve+x8dHoyCBirYOsPM5PGbstAuETPOEWIUwTAMw/53HXQg9U8GpyoPG37L2mbPb91EQuzROJlxI1iCCZND4Wvy4vds00H0Bm/hH3P/noLNLkQHHIsGKvRIi4rXd+SQWx8L8QfuNWCZFtxBK9Yg9PE0Ba4vw9EvBK3mpzWnFBCToOGl5l0kgFDMGYil6tOP+C9ZnFnMLpUYBkLV/XU9WNb4POsU/HpNeg8dFjK1ETiZlIvLZC4mnu2KTpmNXNPnOVwlRl0Gv5qwl6v8z0241fyZAZbaI0Eys6t9N0dFYAd9Nmp+yNNDlUev/qKq18yiyvkw8vKWzQUUBWAGmJ+V8U4rLucoOYX9b7n5la4VwtYAWkw4xo48JUcf7g4ZpDXvqg9v5tZI4fTH8tUuUqTuG1YWNV/v2cADL78hWlXad+s8gqf9Dza5EqX6qQVCqM9CwBTJkFVwuwaGHodpWtCGh8WdKnXOGeH16WWZ6CYcASwI3rs1wnDvTETw5sNeOGn1R5OcF8giwsHBnJZXutKxlPu/Z+bf5zYI8hN2qdLMMcwxKJteZ5EZ/eLt4jshz8IwFwlmURm0l8sf27JYCv88qRndBDQA7Z+N/aVPs+Jd1uhxvZLfa1BfCILP4PgrPcNk/2GQosgCa6aAGUmYnbnMKEJYCYwV3LWcL2pSqJzB8ar2E9oM3wiHukwrHSaIqMAJgx6v6C5d9zN6zIYmxZmFgNZO3FrCN0MljfBgsQ3Z4wFgBVBwVZjD1wyT1NXA0uSFLVBrGB3O+C5ntSrkOAtgA5ZDNusn9+pcEQJJurYDEju7jUEsBU1ageBhSQJVnwzx+s4TCgsi4xf7ua7ICWPy448aUkBx4VkOuX+QFnvvC38XQ5kBWqMEbT9irKmw5mrmvOg+DcBIWnJJXRJxMTNbGYKmVqhsEPTrufe4DOuT1x0McKlXpFVhyLcfjAJzep2qiUqWFPgfz7uSEgzzFwAhZA5wMyLFU4ueSMGIv9nkHgB2xsLQ//2IHCpWJZAcybl4IAijqCUPVFbQWyvKxQ8gUrUI2h82Ri3PqR0TKbzdiwMisAKxJg5GoFqrXzRRhA0We7QlZwe/9IRf0BjPv7FYYbp94PprmzMUbH3V4kcaZ23m0Q+YXCRpFofCwZr0TnwbI0lRXJU7uXO25XO00ATbMMVwGoJBmiBHwBlfq/jCW4bg0J5fCj7O3rVZw+gA2lii0TnyYA66KCOLGQj1R2yo4Q2CFNtWTuhBine7cPW2bbDxAPej22o1PtiDD9bqeezkhsYy866yTvItiZLi+FD/Y6/e88vCRz+9AS6/c5c1qsx1rntEy7DsyZ+tuc1sw19t4ChdflU3gNNn6w/o7NKB5b5viZnN7bC6jBw/KvXsWdQdB7YbbRe2FBEFK6nZSGErQLU/sDXLQiMfV5GZj+tvb0etdrCreJs04DuWJcdXuSl42SowJ28tiyd8T39jCwIvlTzdgdBI3v9/VUTy1x3Cfw1XVDp2QrhfXuoDMpVQTlwsuRNY5J7Xjc6JM98Zj2BWaAmcLtvfOrtk+gE8j1C7P/hOoOoo6f1JotkjiDyHLpiCBYMIP2HNndsdzLrqFFpapiBWqR7w46sIzVHgJg8nEqyZFdHT3kEdfNolV8AYRBetPIDAjv/G4V55PRmGH0fbhrwR7yiWssByuQumuecrsG4cyTjzbV/OzfWpM5clYpMQPzXFIIhXGexWjP4R0dx6lEXL0VFV8AIN8d9ZlCHCClMBs3cPR3HfNnNTY8Lnpuj5FJvcvHa0aDSOjgOe0LzPkY58vR+NZLy04NUz0tDEmNqO4ejnFfpfcbcXrJqeGQe8EK7XTBIt3ZcRpAvWYlj6ZXOjZuZc+VtWnT3CW7Lor+AKZhVWfjjuy+fw0FDKWA1XIyFIYC9IIo5Qc8TMUWnY2rNcoZi+bWFNQrNUVREYEXjz8WZ2uCepC0sgD2v/PtATGGKZmweheBl8Y3DNYX1FNDgefj41f0XN5smlzpEMR69AlUx3wL4eUf3d0R6MOjPSetD++6vw8Ojcq1sAQ7+q/XzaISNLxq42Pcb283A+f0FeJr1sKaY2Zc6ew6VMdiO/Uwi8Au61IpvAT2bFwlw7dy4XkIsLHqBpJMpIpZp+pzwjgkoNGPCkummt/3MhUbBHwLACBJhFPFVQ6WtkENwVtr5gV+38FM5c6opxnPsDU+KEkAwI8lAKgqgjUIWlEJUtpHRQSjau5twtj4oGQBAIhgOBnbya3zhrwRFCGg4U8kxqwj3zxP5wp/qHV27Mdha3xQFgHYeAkRC8kUSDYJQVT3UAqYePR2v3X7iIjgFIfB4XOirAIAOHMYx8568QvygSWAGLDhMnYoL1YtWwpo9M+m1u6VUryB2blS5uKDQNkFAKwZxLHYx179AicgBmzKkNmDN+657gCVtVjZjIJNlFd7La12AuN9Y0P8pT+W8Rj3WlERAdiUMiS4kV9CXeg7YCzHShx48ckK5B5Qd9fWZvaF1eQXUlEBAFiD22MNm/w4iEECVTixuBHovL4fKi4AmxUbhrrTadrl1zeoFTD3WFvntrwqzFRNADalOonVot4b3qbqArDBEWbpFF8VtKGhXk19MWomABv4CJPjDU9zbr7JyxA1+ILRoCHi+YZ4/Hg9ePZeqLkA8oEY7ow3vmhys5tL1iOUilVazVjCiLFEVHq7E4ESQCEYJniaOk3OO7HHPc+cbOa1pn40sweicU708vMsRuexH1K9hHGlEmgBOFFYQm06nHYievVgNUqq64HQCUBTXvSBERFHCyDiaAFEHC2AiKMFEHG0ACKOFkDE0QKIOFoAEUcLIOJoAUQcLYCIowUQcbQAIs433WUGPO+LgQYAAAAASUVORK5CYII=" class="image"> <br />
        Please sign up <a href="https://www.wmsellertools.com/" target="_blank">here</a> to get a license`;
    const targetNode = document.querySelector('div[class="h-100 relative"]');
    if (!targetNode) return;
    targetNode.parentNode.insertBefore(viewerNode, targetNode.nextSibling);

    addDemoNode();

  }

  chrome.storage.local.get(['settingsData'], CS => {
    if (CS.settingsData.viewUPCs) {
      const currentUrl = window.location.href.match(/:\/\/([^?]*)/).pop();
      window.activeUrl = currentUrl;
      if (document.querySelector(`[extension-url="${currentUrl}"]`) && currentUrl.includes("ip/")) {
        console.log("REMOVING");
        //document.querySelector(`[extension-url="${currentUrl}"]`)?.remove();
      }
      if (!document.querySelector(`[extension-url="${currentUrl}"]`) && currentUrl.includes("ip/")) {
        const interval = setInterval(() => {
          if (document.querySelector('div[class="h-100 relative"]')) {
            clearInterval(interval);
            addExtensionNode();
          }
        }, 100);
      }
    } else addMessage();
  });

  //Change color to branding
  const checkBranding = async (brand) => {
    brand = brand.toLowerCase();
    const brandingStatus = await fetch(`https://licenses.sceptermarketing.com/getBrandingData/${brand}`)
   return brandingStatus.json();
  }

  const changeBrandingStatus = async (product) => {
    const { specifications } = product.props.pageProps.initialData.data.idml;
    const brand = getBrand(specifications);
    let colorChangeDiv = document.querySelector('div[class="bg-white br3 shadow-1 border-box w-100 pa3 pt0"]')
    const brandingStatus = await checkBranding(brand);
    const sub_category = brandingStatus?.results[0]?.sub_category
    const main_category = brandingStatus?.results[0]?.main_category
    const msgDiv = document.querySelector('div[class="justify-between items-center"]');
    let msg = document.createElement("div");  
    msg.className = 'msgDiv'                       
    let heading = document.createElement("span"); 
    let textBody = document.createElement("span");  
    let textnode;
    let textHeading;
    if (main_category == 'no_issues') {
      textHeading = document.createTextNode("No Issues Found -")
      textnode = document.createTextNode("This item / brand has not been found to be restricted on Walmart and we have not received any reports of IP, Copyright, or Trademark issues");     
      msg.style.borderColor = 'green'
      msg.style.backgroundColor = '#cef2d2'; //green
    }
    else if (main_category == 'do_not_list' && sub_category == 'restricted') {
      textHeading = document.createTextNode("Restricted -")
      textnode = document.createTextNode("Item has found to be restricted on Walmart for most sellers");     
      msg.style.borderColor = 'red'
      msg.style.backgroundColor = '#e6bebe'; //red
    }
    else if (main_category == 'do_not_list' && sub_category == 'warning') {
      textHeading = document.createTextNode("Warning - ")
      textnode = document.createTextNode("Brand is known for having IP, Copyright, or Trademark related issues");     
      msg.style.borderColor = 'yellow' 
      msg.style.backgroundColor = '#e6dd9c'; //yellow
    }
    else if (main_category == 'warning') {
      textHeading = document.createTextNode("Possible Issue - ")
      textnode = document.createTextNode("This brand could potentially have issues with IP, Copyright, or Trademark issues");     
      msg.style.borderColor = 'yellow'
      msg.style.backgroundColor = '#e6dd9c'; //yellow
    }
    heading.style.fontWeight = 'bold';
    heading.style.color = 'black';
    textBody.style.color = 'black';
    textBody.appendChild(textnode)
    heading.appendChild(textHeading);
    msg.appendChild(heading);
    msg.appendChild(textBody); 
    msgDiv.appendChild(msg);

}

  //sellers sales rank

  const getCatagoryPaths = (productData) => {
    let allCategoryPath = [];
    let categoryPath = productData?.props.pageProps.initialData.data.contentLayout.pageMetadata.pageContext?.itemContext?.categoryPath;
    const usItemId = productData?.props.pageProps.initialData.data.product.usItemId;
    categoryPath = categoryPath?.replaceAll(':', '_').slice(2, categoryPath.length);
    allCategoryPath[0] = categoryPath;
    const totalPaths = categoryPath.split('_');
    categoryPath = categoryPath.split('_');
    for (let i = 0; i < totalPaths.length - 1; i++) {
      categoryPath.pop();
      let category = '';
      categoryPath.map((catg) => {
        category = category + catg + '_';
      })
      allCategoryPath[i + 1] = category.slice(0, category.length - 1)
    }
    getSalesRank(allCategoryPath, usItemId);
  }

  const addRankToDiv = (salesRank, rankOfProduct, pageref, categoryName) => {
    const salesRankDiv = document.querySelector('div[data-testid="add-to-cart-price-atf"]') || document.querySelector('div[class="flex flex-column"]');
    const br = document.createElement('br');
    const spanRankOfProduct = document.createElement('span');
    spanRankOfProduct.innerHTML = `
          <span style="font-size: 14px; display: inline; line-height: 1em; letter-spacing: 0.25px;"># ${rankOfProduct}</span>
    `
    const spanCategoryName = document.createElement('span');
    spanCategoryName.innerHTML = `
       <span style="font-size: 14px; font-weight:bold; display: inline; line-height: 1em; letter-spacing: 0.25px;"> in <a href=${pageref} target="_blank" style="text-decoration: none">${categoryName}</a></span><br />
    `
    salesRank.appendChild(spanRankOfProduct);
    salesRank.appendChild(spanCategoryName);
    salesRankDiv.appendChild(br);
    salesRankDiv.appendChild(br);
    salesRankDiv.appendChild(salesRank);
  }

  const getProductIndex = async (categoryPath, page, usItemId) => {
    let PageData = await fetch(`https://www.walmart.com/search/preso?cat_id=${categoryPath}&page=${page}`);
    PageData = await PageData?.text();
    const items = PageData?.match(/(?<=showOptions":).*?(?=","image)/g)
    for (let i = 0; i < items?.length; i++) {
      if (items[i].includes(usItemId)) {
        return i+1;
      }
    }
    return 0;
  }

  const getSalesRank = async (allCategoryPath, usItemId) => {
    let page = 1;
    const totalCategories = document.querySelectorAll('span[itemprop="name"]');
    let productIndexOnPage = 0;
    let categoryName;
    let rankOfProduct = 0

    const salesRank = document.createElement('div');
    salesRank.style = 'display: inline-block; border-radius: 5px; border-width: 1px; border-style: solid; border-color: rgb(87, 114, 227); background: rgb(215, 219, 235); margin: 5px; padding: 20px ; line-height: 1em; vertical-align: top;';

    for (let i = 0; i < totalCategories.length; i++) {
      const pageref = `https://www.walmart.com/search/preso?cat_id=${allCategoryPath[i]}`
      let PageData = await fetch(`https://www.walmart.com/search/preso?cat_id=${allCategoryPath[i]}&page=1`);
      PageData = await PageData?.text();
      const last_page_number = PageData?.match(/(?<=maxPage":).*?(?=,"pageProperties)/)
      for (; page <= last_page_number; page++) {
        productIndexOnPage = await getProductIndex(allCategoryPath[i], page, usItemId);
        if(productIndexOnPage) {
          break;
        };
      }

      if (productIndexOnPage) {
        rankOfProduct = (page - 1) * 40 + productIndexOnPage;
        categoryName = totalCategories[totalCategories.length - (i + 1)]
        categoryName = categoryName?.innerText;
        addRankToDiv(salesRank, rankOfProduct, pageref, categoryName);
        productIndexOnPage = 0;
        page = 1
      }
    }
  }

  //SEND TO SQS STARTS......

  const getOffers = async (sellersData) => {
    const offers = sellersData?.data.product.allOffers;
    const parsedOffers = [];
    for (const offerId in offers) {
      if (offers[offerId].availabilityStatus == 'IN_STOCK' || offers[offerId].sellerId == WALMART_ID) {
        const parsedOffer = await getParsedOffer(offers[offerId]);
        if (parsedOffer) {
          parsedOffers.push(parsedOffer);
        };
      }
    }

    return parsedOffers;

  }

  const getParsedOffer = async (offer) => {
    const price = offer.priceInfo.currentPrice.price;
    const returnable = offer.returnPolicy.returnable;
    offer['returnable'] = returnable;
    offer['price'] = price;
    const filterData = ['shippingOption', 'priceInfo', 'returnPolicy'];
    filterData.forEach((key) => {
      delete offer[key];
    });
    return offer;
  }

  const getBrand = (specs) => {
    let brand = specs.find(item => item.name == "Brand");
    return brand?.value || null;
  }

  const getWeight = (specs) => {
    let weight = specs.find(item => item.name == "AssembledProductWeight");
    return weight?.value || null;
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
      const key = item.split('-')[0];
      const value = item.split('-')[1];
      obj[key] = value;
    })
    return obj;
  }

  const getMin3rdPartyWFS = async (offers) => {
    const WFSPrices = [];
    Object.keys(offers).forEach(key => {
      if (offers[key].sellerId != WALMART_ID && offers[key].availabilityStatus == "IN_STOCK" && offers[key]?.wfsEnabled) WFSPrices.push(offers[key].price);
    })
    return WFSPrices.sort((a, b) => { return a - b })[0] || 0;
  }

  const getMin3rdPartyPrice = (offers) => {
    const prices = [];
    for (let key in offers) {
      if (offers[key].sellerId != WALMART_ID && offers[key].availabilityStatus == "IN_STOCK" && !offers[key]?.wfsEnabled) prices.push(offers[key].price);
    }
    return prices.sort((a, b) => { return a - b })[0] || 0;
  }

  const getWalmartOffer = (offers) => {
    for (let key in offers) {
      if (offers[key].sellerId == WALMART_ID) {
        if (offers[key].availabilityStatus == "IN_STOCK") {
          return offers[key].price
        } else if (offers[key].availabilityStatus == "OUT_OF_STOCK") {
          return 0;
        }
      }
    }
    return 0;
  }

  const createTimeSeriesObject = async (productData, sellersData) => {
    const { product } = productData.props.pageProps.initialData.data;
    const { usItemId, upc, canonicalUrl, model, selectedVariantIds, variants } = product;
    const variationIds = variants?.map(item => item.usItemId) || [];
    const ironbankCategory = productData.props.pageProps.initialData.data.contentLayout.pageMetadata.pageContext.itemContext.categoryPathName
    const offers = await getOffers(sellersData);

    if (offers.length) {
      offers[0].buyBox = true;
      const { specifications } = productData.props.pageProps.initialData.data.idml;
      const brand = getBrand(specifications);
      const weight = getWeight(specifications);
      const mpn = getMPN(specifications);
      const description = product.shortDescription || "" + product.detailedDescription || "";
      const variantAttributes = parseVariantAttributes(selectedVariantIds) || {};
      const title = getTitle(canonicalUrl)
      const productInfo = {
        itemId: usItemId,
        categoryTree: ironbankCategory,
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
      timeSeries["priceInfo"]["buyBoxPrice"] = offers[0].price;
      timeSeries["priceInfo"]["3rdPartyWFS"] = await getMin3rdPartyWFS(offers);
      timeSeries["priceInfo"]["walmartPrice"] = await getWalmartOffer(offers);
      timeSeries["priceInfo"]["3rdPartyFBM"] = await getMin3rdPartyPrice(offers);
      timeSeries["offers"] = offers;

      return timeSeries;
    }
    return;
  }

  const sendToSQS = async (data) => {

    try {
      const response = await fetch("https://licenses.sceptermarketing.com/timeseries/sendTimeseries", {
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          data
        }),
        "method": "POST"
      })
      return response;
    } catch (err) {
      throw err;
    }
  }

  const getSellerData = async (id) => {
    const sellersResponse = await fetch("https://www.walmart.com/orchestra/home/graphql", {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        "device_profile_ref_id": "-YSUpbKl6_Gfobe0CeRQFSrHKMEs80QLFqOh",
        "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "wm_mp": "true",
        "wm_page_url": window.location.href,
        "wm_qos.correlation_id": "yawzu8iP3-XVbCRFWAy6Oyq8O1hWvuAhkXJ1",
        "x-apollo-operation-name": "GetAllSellerOffers",
        "x-enable-server-timing": "1",
        "x-latency-trace": "1",
        "x-o-ccm": "server",
        "x-o-correlation-id": "yawzu8iP3-XVbCRFWAy6Oyq8O1hWvuAhkXJ1",
        "x-o-gql-query": "query GetAllSellerOffers",
        "x-o-platform": "rweb",
        "x-o-platform-version": "main-95-d16692",
        "x-o-segment": "oaoh",
        "cookie": document.cookie
      },
      "referrer": window.location.href,
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `{\"query\":\"query GetAllSellerOffers( $itemId:String! $postalAddress:PostalAddress $storeFrontIds:[StoreFrontId]){product( itemId:$itemId postalAddress:$postalAddress storeFrontIds:$storeFrontIds ){allOffers{offerId offerType availabilityStatus fulfillmentType fulfillmentBadge sellerId catalogSellerId sellerName sellerDisplayName sellerType wfsEnabled hasSellerBadge priceInfo{currentPrice{price priceString}unitPrice{price priceString}}returnPolicy{returnable freeReturns returnWindow{value unitType}}shippingOption{slaTier availabilityStatus accessTypes deliveryDate maxDeliveryDate shipPrice{price priceString}}}}}\",\"variables\":{\"itemId\":\"${id}\"}}`,
      "method": "POST",
      "mode": "cors"
    });
    const sellersData = await sellersResponse.json();

    return sellersData;
  }

})();