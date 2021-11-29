// FUNCTIONS
function getXMLHttp(requestMethod, requestUrl, callBack, formObject, requestHeaders, getJSON) {
    var xhttp = new XMLHttpRequest();
    if (requestMethod === "POST") {
        var formData = new FormData();
        if (formObject) Object.keys(formObject).forEach(function (formDataName) {
            formData.append(formDataName, (typeof (formObject[formDataName]) === "object") ? JSON.stringify(formObject[formDataName]) : formObject[formDataName]);
        });
        xhttp.open("POST", requestUrl, true);
        if (requestHeaders) Object.keys(requestHeaders).forEach(function (headerName) {
            xhttp.setRequestHeader(headerName, requestHeaders[headerName]);
            if (headerName === "Content-Type") if (requestHeaders[headerName] === "application/json") formData = JSON.stringify(formObject);
        });
        xhttp.timeout = 2 * 60 * 1000;
        xhttp.send(formData);
    } else if (requestMethod === "GET") {
        xhttp.open("GET", requestUrl, true);
        if (requestHeaders) Object.keys(requestHeaders).forEach(function (headerName) {
            xhttp.setRequestHeader(headerName, requestHeaders[headerName]);
        });
        xhttp.timeout = 2 * 60 * 1000;
        xhttp.send();
    }
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (getJSON) callBack(JSON.parse(xhttp.responseText));
            else callBack(xhttp);
        }
    };
}

function extractObjects(dataString, checkValidity, keyMatch) {
    var i,
        secondBracket = 0,
        thirdBracket = 0,
        currentIndex = 0,
        extractedList = [],
        isJSON = function (str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        },
        isEmpty = function (obj) {
            return Object.keys(obj).length === 0;
        };
    for (i = 0; i < dataString.length; i++) {
        bracketClosed = false;
        if (dataString[i] === "[") {
            thirdBracket++;
        } else if (dataString[i] === "]") {
            thirdBracket--;
            bracketClosed = true;
        } else if (dataString[i] === "{") {
            secondBracket++;
        } else if (dataString[i] === "}") {
            secondBracket--;
            bracketClosed = true;
        }
        if (secondBracket !== 0 || thirdBracket !== 0 || bracketClosed) extractedList[currentIndex] = ((extractedList[currentIndex]) ? extractedList[currentIndex] : "") + dataString[i];
        if (bracketClosed && secondBracket === 0 && thirdBracket === 0) {
            currentIndex++;
        }
    }
    if (checkValidity) {
        var validList = [];
        for (i = 0; i < extractedList.length; i++) {
            if (keyMatch) if (extractedList[i].indexOf(`"${keyMatch}":`) === -1 && extractedList[i].indexOf(`${keyMatch}:`) === -1) continue;
            if (isJSON(extractedList[i])) {
                if (keyMatch) if (extractedList[i].indexOf(`"${keyMatch}":`) === -1 && extractedList[i].indexOf(`${keyMatch}:`) === -1) continue;
                var pasredData = JSON.parse(extractedList[i]);
                if (!isEmpty(pasredData)) validList.push(pasredData);
            } else validList.concat(extractObjects(extractedList[i].slice(1, -1), true));
        }
        return validList;
    } else return extractedList;
}

function triggerEvent(el, type) {
    if ("createEvent" in document) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent("on" + e.eventType, e);
    }
}

function getLocal(localName, setAsGlobal) {
	if (localName && setAsGlobal) {
		if (localStorage[localName]) {
			window[localName] = JSON.parse(localStorage[localName]);
			return true;
		} else return false;
	} else if (localName) {
		if (localStorage[localName]) return JSON.parse(localStorage[localName]);
		else return null;
	} else return null;
}

function setLocal(localName, jsonData, setAsGlobal) {
	if (localName && jsonData) {
		localStorage[localName] = JSON.stringify(jsonData);
		if (window[localName] || setAsGlobal) window[localName] = jsonData;
		return true;
	} else if (localName && window[localName]) {
		localStorage[localName] = JSON.stringify(window[localName]);
		return true;
	} else return false;
}

function setValue(inputElement, inputValue) {
    triggerEvent(inputElement, "focus");
    triggerEvent(inputElement, "keydown");
    triggerEvent(inputElement, "keypress");
    inputElement.value = inputValue;
    triggerEvent(inputElement, "keyup");
    triggerEvent(inputElement, "change");
    triggerEvent(inputElement, "blur");
}

function getUrlParameter(urlString, parameterName) {
    return (new URL(urlString)).searchParams.get(parameterName);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var onAppend = function (targetElement, callBack) {
    var elementObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            if (m.addedNodes.length) {
                callBack(m.addedNodes);
            }
        })
    })
    elementObserver.observe(targetElement, { childList: true });
}

function onElementAppears(elementSelector, callBack) {
    if (document.querySelector(elementSelector)) setTimeout(function () {
        var appearedElement = document.querySelector(elementSelector);
        if (appearedElement) callBack(appearedElement);
        else onElementAppears(elementSelector, callBack);
    }, 500);
    else setTimeout(function () {
        onElementAppears(elementSelector, callBack);
    }, 500);
}

document.body.addEventListener("click", function (event) {
    if (Array.prototype.slice.call(document.querySelectorAll(".dropdown-container *")).indexOf(event.target) === -1) {
        var allDropdowns = document.querySelectorAll(".dropdown-area");
        allDropdowns.forEach(singleDropdown => {
            if (singleDropdown.style.display !== "none") singleDropdown.style.display = "none";
        });
    }
});