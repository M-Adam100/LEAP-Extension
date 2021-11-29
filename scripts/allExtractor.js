// MAIN
(function () {
    var appearElem = function () {
        // NOTIFICATION AREA
        var UPCViewer = document.createElement("div");
        UPCViewer.setAttribute("extension-element", "true");
        UPCViewer.style = `border-radius: 7.5px; border: 1px solid rgb(87, 114, 227); background: rgb(243, 250, 240);`;
        UPCViewer.innerHTML = `<table style="width: 100%;"></table>`;

        // UPC EXTRACTION
        var tableArea = UPCViewer.querySelector("[extension-element] table");
        var UPCList = [];
        function viewUPCs() {
            UPCList.forEach(item => {
                var itemUPC = document.createElement("tr");
                itemUPC.innerHTML = `<td>${item.description}</td>${((item.itemId) ? "<td style=\"vertical-align: top;\">" + item.itemId + "</td>" : "")}<td style="vertical-align: top; cursor: text; user-select: all;">${item.UPC}</td>`;
                tableArea.appendChild(itemUPC);
            });
            document.querySelector(".prod-CallToActionSection, .sc-money-box > div:nth-child(2), div.grid.productmarquee.flush > div.col__12-12.col__5-12--sm > div:nth-child(3), .buybox__wrapper .product-title").appendChild(UPCViewer);
        }
        if (window.location.href.indexOf("walmart.com/ip/") !== -1) {
            var allUPCs = JSON.parse(document.getElementById("item").innerHTML).item.product.products;
            var itemIdFound = false;
            Object.keys(allUPCs).forEach(item => {
                var description = "";
                if (allUPCs[item].variants) Object.keys(allUPCs[item].variants).forEach(variation => {
                    description = description + ((description) ? ", " : "") + allUPCs[item].variants[variation].replace(/_/g, " ").replace(/-/g, ": ").replace(/\b\w/g, l => l.toUpperCase());
                });
                else description = "(No Variation)";
                var itemId = (allUPCs[item].usItemId) ? allUPCs[item].usItemId : "";
                var UPC = allUPCs[item].upc || "";
                if (UPC && itemId) UPCList.push({
                    "description": description,
                    "UPC": UPC,
                    "itemId": itemId
                });
                else if (UPC) UPCList.push({
                    "description": description,
                    "UPC": UPC
                });
                if (itemId) itemIdFound = true;
            });
            if (itemIdFound) tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
            else tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
            viewUPCs();
        } else if (window.location.href.indexOf("samsclub.com/sams/") !== -1) {
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
                    if (UPC && itemId) UPCList.push({
                        "description": description,
                        "UPC": UPC,
                        "itemId": itemId
                    });
                    else if (UPC) UPCList.push({
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
                        if (UPC && itemId) UPCList.push({
                            "description": description,
                            "UPC": UPC,
                            "itemId": itemId
                        });
                        else if (UPC) UPCList.push({
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
            viewUPCs();
            UPCViewer.style.margin = "25px 0 0 25px";
        } else if (window.location.href.indexOf("homedepot.com/p/") !== -1) {
            try {
                var variationList = extractObjects(document.documentElement.innerHTML, true, "UPCs")[0].reviewStats.Includes.Products;
                Object.keys(variationList).forEach(itemKey => {
                    var item = variationList[itemKey];
                    var itemId = (item.Id) ? item.Id : "";
                    var UPC = (item.UPCs) ? item.UPCs[0] : "";
                    var description = (item.Name) ? item.Name : "";
                    if (UPC && itemId && description) UPCList.push({
                        "description": description,
                        "UPC": UPC,
                        "itemId": itemId
                    });
                });
                tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
                viewUPCs();
            } catch (error) {
                if (document.querySelector("upc")) {
                    UPCList.push({
                        "description": "(No Variation)",
                        "UPC": document.querySelector("upc").innerText.trim(),
                        "itemId": window.location.href.split("/").pop()
                    });
                    tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
                    viewUPCs();
                }
            }
        }
    };
    setInterval(function () {
        if (!document.querySelector("[extension-element=true]")) {
            appearElem();
        }
    }, 2 * 1000);
})();