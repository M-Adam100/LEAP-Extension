// FUNCTIONS
const getFormData = (formSelector, allRequired, separateBy) => {
	var formInputs = document.querySelector(formSelector).querySelectorAll("[name]:not([type=\"file\"])"),
		formData = {},
		noBlank = true;
	formInputs.forEach(formInput => {
		if (!formInput) return;
		if (!formInput.value) noBlank = false;
		var inputName = formInput.getAttribute("name");
		if (formInput.getAttribute("type") === "checkbox") var inputValue = (formInput.checked) ? true : false;
		else if (formInput.getAttribute("type") === "radio") {
			if (!formInput.checked) return;
			var inputValue = formInput.value;
		} else {
			try {
				if (Number(formInput.value) && formInput.value.length > 16) inputValue = formInput.value;
				else var inputValue = JSON.parse(formInput.value);
			} catch (error) {
				var inputValue = formInput.value;
			}
		}
		if (separateBy && formInput.getAttribute("data-separateable")) formData[inputName] = inputValue.trim().split(separateBy).filter(Boolean);
		else if (formData[inputName]) {
			if (Array.isArray(formData[inputName])) formData[inputName].push(inputValue);
			else {
				var existingValue = formData[inputName];
				formData[inputName] = [existingValue];
				formData[inputName].push(inputValue);
			}
		} else formData[inputName] = inputValue;
	});
	if (allRequired && !noBlank) return false;
	else return formData;
}
const setFormData = (formSelector, formData, separateBy) => {
	for (var inpuName in formData) {
		var inputNode = document.querySelector(formSelector).querySelectorAll("[name=\"" + inpuName + "\"]:not([type=\"file\"])");
		for (var i = 0; i < inputNode.length; i++) {
			if (inputNode[i].getAttribute("type") === "checkbox" || inputNode[i].getAttribute("type") === "radio") {
				inputNode[i].checked = (formData[inpuName] == inputNode[i].value) ? true : false;
			} else if (inputNode[i]) inputNode[i].value = (Array.isArray(formData[inpuName]) && separateBy) ? formData[inpuName].join(separateBy) : formData[inpuName];
		}
	}
	return true;
}
const getLocal = localName => localStorage[localName] ? JSON.parse(localStorage[localName]) : null
const setLocal = (localName, jsonData) => localStorage[localName] = JSON.stringify(jsonData)

// MAIN
const viewExtension = () => {
	extensionVersion.innerHTML = `v<span style="font-family: sans-serif; font-size: 1.075em;">${chrome.runtime.getManifest().version}</span>`
	chrome.storage.local.get(['settingsData'], CS => {
		console.log(CS.settingsData)
		setFormData('[name="settings"]', CS.settingsData);
	});

	document.querySelector('[name="settings"]').onchange = document.querySelector('[name="settings"]').onkeyup = () => {
		chrome.storage.local.set({
			settingsData: getFormData('[name="settings"]')
		});
	};
};

function removeFromInstalled() {
	chrome.identity.getProfileUserInfo(async (userinfo) => {
		if( userinfo.email ) {
			await fetch("https://licenses.sceptermarketing.com/activecampaign/deleteDeal", {
				"headers": {
					"content-type": "application/json"
				},
				"body": JSON.stringify({
					email: userinfo.email,
					currentProductId: 10375297
				}),
				"method": "DELETE"
			})
		}
		
	});
}

function addTagToContact() {
	chrome.identity.getProfileUserInfo(async (userinfo) => {
		if( userinfo.email ) {
			await fetch("https://licenses.sceptermarketing.com/activecampaign/addTagToContact", {
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
}

//GET EMAIL
const setDeal = () => {
	chrome.identity.getProfileUserInfo(async (userinfo) => {
		if( userinfo.email ) {
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
}


// LICENSING
const checkLicense = async () => {
	// const licensingStatus = await fetch("http://3.86.137.112:3000/licensing/authorize", {
	// 	"method": "POST",
	// 	"headers": {
	// 		"content-type": "application/json"
	// 	},
	// 	"body": JSON.stringify({
	// 		currentProductId: 10375297
	// 	})
	// }).then(body => body.json());
	// if (!licensingStatus.authorized) {
	// 	await setDeal();
		licensingNode.innerHTML = `
			<div style="position: fixed; z-index: 10; width: 100%; height: 100%; background: rgb(255 255 255); top: 0; left: 0;">
				<form name="licensing" style="margin: 95px 40px 40px; zoom: 1.125; text-align: justify;">
					<div id="licensingMessage"></div>
					<span class="input-label-top">Please enter your email</span><br />
					<input type="text" name="email">
					<span class="input-label-top">Please enter your license key to activate this extension:</span><br />
					<input type="text" name="licenseKey">
					<button>Activate</button>
					<span class="input-label-top" style="margin-top: 7.5px;">Don't have a license key? <a href="https://www.wmsellertools.com/" target="_blank">Click here to get one.</a></span>
				</form>
			</div>
		`
	// 	document.querySelector('[name="licensing"]').addEventListener('submit', async thisEvent => {
	// 		thisEvent.preventDefault();
	// 		licensingNode.style.display = 'none'
	// 		const licensingStatus = await fetch("http://3.86.137.112:3000/licensing/license", {
	// 			"headers": {
	// 				"content-type": "application/json"
	// 			},
	// 			"body": JSON.stringify({
	// 				currentProductId: 10375297,
	// 				licenseKey: getFormData('[name="licensing"]').licenseKey
	// 			}),
	// 			"method": "POST"
	// 		}).then(body => body.json());
	// 		if (licensingStatus.licenseValid) checkLicense();
	// 		else {
	// 			licensingMessage.innerHTML = `<div style="padding: 7.5px 8.5px; font-size: 11px; letter-spacing: 1px; margin-bottom: 10px; border: 1px solid rgba(0, 0, 0, 0.075); border-radius: 0; background: rgb(244 67 54 / 36%); text-align: center;">${licensingStatus.message}</div>`;
	// 			licensingNode.style.display = 'block'
	// 		}
	// 	});
	// } else {
	// 	await removeFromInstalled();
	// 	if (licensingStatus.validLicenses['WM Seller Tool Standard'] || licensingStatus.validLicenses['WM Seller Tool Pro'] || licensingStatus.validLicenses['WM Seller Tool Enterprise']) {
	// 		chrome.identity.getProfileUserInfo(async (userinfo) => {
	// 			if( userinfo.email  && licensingStatus.userEmail !== userinfo.email) {
	// 				await addTagToContact();
	// 			}
	// 		});
	// 		chrome.storage.local.set({
	// 			settingsData: {
	// 				viewDetails: true,
	// 				viewChart: true,
	// 				viewUPCs: true
	// 			}
	// 		});
	// 	} else if (licensingStatus.validLicenses['WM Seller Tool Lite']) {
			
	// 		chrome.storage.local.set({
	// 			settingsData: {
	// 				viewDetails: false,
	// 				viewUPCs: true,
	// 				viewChart: true
	// 			}
	// 		});
	// 		document.querySelector('form select[name="viewDetails"]').setAttribute('disabled', '')
	// 	}                
	// 	viewExtension();
	// 	openTab('settings');
	// }
};
checkLicense();

const viewResources = () => {
	const currentResources = getLocal('currentResources')
	if (new Date().getTime() < currentResources) {

	}

	setLocal('currentResources', {
		
	})

}