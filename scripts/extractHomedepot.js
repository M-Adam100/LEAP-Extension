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
    viewerNode.style = `border-radius: 7.5px; border: 1px solid rgb(87, 114, 227); background: rgb(243, 250, 240); margin: 10px; width: calc(100% - 59px); display: block;`;
    viewerNode.innerHTML = `<table style="width: 100%;"></table>`;
    document.querySelector('[class="zone-card overflow"] [name="product-details-share"]').appendChild(viewerNode);

    // UPC EXTRACTION
    window.tableArea = viewerNode.querySelector("[extension-node] table");
    var availableUPCs = [];
    if (window.location.href.indexOf("homedepot.com/p/") !== -1) {
        try {
            var variationList = extractObjects(document.documentElement.innerHTML, true, "UPCs")[0].reviewStats.Includes.Products;
            Object.keys(variationList).forEach(itemKey => {
                var item = variationList[itemKey];
                var itemId = (item.Id) ? item.Id : "";
                var UPC = (item.UPCs) ? item.UPCs[0] : "";
                var description = (item.Name) ? item.Name : "";
                if (UPC && itemId && description) availableUPCs.push({
                    "description": description,
                    "UPC": UPC,
                    "itemId": itemId
                });
            });
            tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
            viewUPCs(availableUPCs);
        } catch (error) {
            if (matchedUPC = document.documentElement.innerHTML.match(/\"upc\":\"([^"]*)\"/)) {
                availableUPCs.push({
                    "description": "(No Variation)",
                    "UPC": matchedUPC.pop(),
                    "itemId": window.location.href.split("/").pop()
                });
                tableArea.innerHTML = `<tr><th style="border-top-left-radius: 6.5px;">Description</th><th>Item ID</th><th style="border-top-right-radius: 6.5px;">UPC</th></tr>`;
                viewUPCs(availableUPCs);
            }
        }
    }
}

(function () {
    setInterval(function () {
        if (!document.querySelector("[extension-node=true]")) {
            addExtensionNode();
        }
    }, 2 * 1000);
})();