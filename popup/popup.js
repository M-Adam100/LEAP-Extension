//CONSTANTS

const CONTACTS = {
  Free_Trial: 10,
  Personal: 100
}

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
  extensionVersion.innerHTML = `<a href="https://www.leap.green/contact" target= "_blank" style="font-size: 1.075em; color: black">Contact Support</a>`
};

chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, async (tabs) => {
  const url = tabs[0].url;
  if (url.includes('https://www.linkedin.com/in')) {
    document.getElementById('numberOfContacts').value = 1;
    document.getElementById('numberOfContacts').setAttribute('disabled', true);
    document.getElementById('keywords').setAttribute('disabled', true);
    document.getElementById('numberOfContacts_specific').value = 1;
    document.getElementById('numberOfContacts_specific').setAttribute('disabled', true);
    document.getElementById('keywords_specific').setAttribute('disabled', true);
    document.getElementById('geography').setAttribute('disabled', true);
    document.getElementById('industry').setAttribute('disabled', true);
  }

})


document.getElementById('leap').addEventListener('click', () => {
  const contactsLeft = getLocal('contactsLeft');
  const numberOfContacts = document.getElementById('numberOfContacts').value;
  if (!numberOfContacts) {
    alert("No Contacts Selected");
  } else if (contactsLeft < numberOfContacts) {
    alert("Not Enough Contacts, Kindly Upgrade your plan!")
  } else {
    const keywords = document.getElementById('keywords').value;
    const keywordArray = keywords.split(',');
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, async (tabs) => {
      const res = await fetch("https://leap-extension.herokuapp.com/saveData", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          fullName: getLocal('username'),
          company: getLocal('company'),
          keywords: keywordArray,
          numberOfContacts,
          type: 'WEB',
          emailAddress: getLocal('emailAddress'),
          url: tabs[0].url
        })
      })
      document.getElementById('message').style.display = 'flex'
      setTimeout(() => {
        document.getElementById('message').style.display = 'none'
  
      }, 1500);
  
    });
  }
})

document.getElementById('leap_specific').addEventListener('click', () => {
  const numberOfContacts = document.getElementById('numberOfContacts_specific').value;
  const contactsLeft = getLocal('contactsLeft');
  if (contactsLeft < numberOfContacts) {
    alert("Not enough contacts Left!");
  } else {
    const keywords = document.getElementById('keywords_specific').value;
    const geography = document.getElementById('geography').value;
    const industry = document.getElementById('industry').value;
    const keywordArray = keywords.split(',');
    const industryArray = industry.split(',');
    const geographyArray = geography.split(',');
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, async (tabs) => {
      const res = await fetch("https://leap-extension.herokuapp.com/saveData", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          fullName: getLocal('username'),
          company: getLocal('company'),
          keywords: keywordArray,
          numberOfContacts,
          geography: geographyArray,
          industry: industryArray,
          type: 'SPECIFIC',
          emailAddress: getLocal('emailAddress'),
        })
      })
    });  
    document.getElementById('message_specific').style.display = 'flex'
    setTimeout(() => {
      document.getElementById('message_specific').style.display = 'none'

    }, 1500);
  }
  
})

// LICENSING
const checkLicense = async () => {
  const licensingStatus = await fetch("https://leap-extension.herokuapp.com/authorize", {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify({
      authorizationCode: getLocal('authorizationCode')
    })
  }).then(body => body.json());

  if (!licensingStatus.authorized) {
    licensingNode.innerHTML = `
			<div style="position: fixed; z-index: 10; width: 100%; height: 100%; background: rgb(255 255 255); top: 0; left: 0;">
				<form name="licensing" style="margin: 95px 40px 40px; zoom: 1.125; text-align: justify;">
					<div id="licensingMessage"></div>
					
					<span class="input-label-top">Please enter your license key to activate this extension:</span><br />
					<input type="text" name="licenseKey">
					<button>Activate</button>
					<span class="input-label-top" style="margin-top: 7.5px;">Don't have a license key? <a href="https://www.example.com" target="_blank">Click here to get one.</a></span>
				</form>
			</div>
		`
    document.querySelector('[name="licensing"]').addEventListener('submit', async thisEvent => {
      thisEvent.preventDefault();
      licensingNode.style.display = 'none'
      const licensingStatus = await fetch("https://leap-extension.herokuapp.com/license", {
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          licenseKey: getFormData('[name="licensing"]').licenseKey
        }),
        "method": "POST",

      }).then(body => body.json());
      if (licensingStatus.licenseValid) {
        setLocal('authorizationCode', licensingStatus.authorizationCode);
        setLocal('username', licensingStatus.username);
        setLocal('company', licensingStatus.company);
        setLocal('emailAddress', licensingStatus.emailAddress);
        checkLicense();
      }
      else {
        licensingMessage.innerHTML = `<div style="padding: 7.5px 8.5px; font-size: 11px; letter-spacing: 1px; margin-bottom: 10px; border: 1px solid rgba(0, 0, 0, 0.075); border-radius: 0; background: rgb(244 67 54 / 36%); text-align: center;">${licensingStatus.message}</div>`;
        licensingNode.style.display = 'block'
      }
    });
  } else {
    const currentLicense = licensingStatus.validLicenses['Personal_Use'] || licensingStatus.validLicenses['Free_Trial'] || licensingStatus.validLicenses['Full_Access'];
    document.getElementById('remaining_contacts').innerText += ": " + currentLicense.contactsLeft;
    document.getElementById('remaining_contacts_specific').innerText += ": " + currentLicense.contactsLeft;
    let percentage = (currentLicense/100)*CONTACTS.Personal;
    if (!currentLicense.feature) {
      document.querySelector('div[data-name="specific"]').classList.add('blur');
      percentage = (currentLicense/100)*CONTACTS.Free_Trial;
    } 
    [...document.getElementsByClassName('progress')].forEach(item => item.style.width = `${percentage}%`)

    setLocal('contactsLeft', currentLicense.contactsLeft);
    if (currentLicense.contactsLeft > 200) {
      document.getElementById('remainingContact_Web').style.display = 'none';
      document.getElementById('remainingContact_Specific').style.display = 'none';
      document.getElementById('remaining_contacts').style.display = 'none';
      document.getElementById('remaining_contacts_specific').style.display = 'none';
      document.getElementById('remaining_contacts').style.display = 'none';
      document.getElementById('remaining_contacts_specific').style.display = 'none';
    }
    viewExtension();
    openTab('web');
  }
};
checkLicense();

const viewResources = () => {
  const currentResources = getLocal('currentResources')
  if (new Date().getTime() < currentResources) {

  }

}