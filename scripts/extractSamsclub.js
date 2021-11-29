// MAIN
function viewUPCs(availableUPCs) {
    availableUPCs.forEach(item => {
        var itemUPC = document.createElement("tr");
        itemUPC.innerHTML = `<td>${item.description}</td>${((item.itemId) ? "<td style=\"vertical-align: top;\">" + item.itemId + "</td>" : "")}<td style="vertical-align: top; cursor: text; user-select: all;">${item.UPC}</td>`;
        tableArea.appendChild(itemUPC);
    });
}

function addExtensionNode() {
    // VIEWER AREA
    var viewerNode = document.createElement("div");
    viewerNode.setAttribute("extension-node", "true");
    viewerNode.style = `border-radius: 7.5px; border: 1px solid rgb(87, 114, 227); background: rgb(243, 250, 240);`;
    viewerNode.innerHTML = `<table style="width: 100%;"></table>`;
    document.querySelector(".prod-CallToActionSection, .sc-money-box > div:nth-child(2), div.grid.productmarquee.flush > div.col__12-12.col__5-12--sm > div:nth-child(3), .buybox__wrapper .product-title").appendChild(viewerNode);

    // UPC EXTRACTION
    var tableArea = viewerNode.querySelector("[extension-node] table");
    var availableUPCs = [];
    if (window.location.href.indexOf("samsclub.com/sams/") !== -1) {
        try {
            extractObjects(document.documentElement.innerHTML, true, "upcId")[0].product.product.skuOptions.forEach(item => {
                var itemId = (item.itemNumber) ? item.itemNumber : "";
                var UPC = "";
                var description = "";
                if (item.varianceValueMap) Object.keys(item.varianceValueMap).forEach(variationKey => {
                    var variation = item.varianceValueMap[variationKey];
                    description = description + ((description) ? ", " : "") + variation.varianceNameOriginal + ": " + variation.varianceValue;
                    if (variation.upcId) UPC = variation.upcId;
                });
                else description = "(No Variation)";
                if (UPC && itemId) availableUPCs.push({
                    "description": description,
                    "UPC": UPC,
                    "itemId": itemId
                });
                else if (UPC) availableUPCs.push({
                    "description": description,
                    "UPC": UPC
                });
                if (itemId) itemIdFound = true;
            });
        } catch (error) {
            try {
                extractObjects(document.documentElement.innerHTML, true, "upc")[0].product.product.skuOptions.forEach(item => {
                    var itemId = (item.itemNumber) ? item.itemNumber : "";
                    var UPC = (item.upc) ? item.upc : "";
                    var description = "(No Variation)";
                    if (UPC && itemId) availableUPCs.push({
                        "description": description,
                        "UPC": UPC,
                        "itemId": itemId
                    });
                    else if (UPC) availableUPCs.push({
                        "description": description,
                        "UPC": UPC
                    });
                    if (itemId) itemIdFound = true;
                });
            } catch (errorSecond) {
                tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px; border-top-right-radius: 6.5px;">No UPC found!</th></tr>`;
                return;
            }
        }
        if (itemIdFound) tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
        else tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
        viewUPCs(availableUPCs);
        viewerNode.style.margin = "25px 0 0 25px";
    }
}

(function () {
    setInterval(function () {
        if (!document.querySelector("[extension-node=true]")) {
            addExtensionNode();
        }
    }, 2 * 1000);
})();