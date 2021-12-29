//CONSTANTS

const CONTACTS = {
  Free_Trial: 10,
  Personal: 100
}

const getElementById = (id) => document.getElementById(id)

const showMessage = (primaryMessage, secondaryMessage, type) => {
  const messageNode = getElementById('message');
  if (type == 200) messageNode.style.background = 'rgb(0 0 0 / 10%)'
  else messageNode.style.background = 'rgb(203 32 32 / 10%)'
  messageNode.innerHTML = primaryMessage + '<br/>' + secondaryMessage;
  messageNode.style.display = 'flex';
  setTimeout(() => {
    messageNode.style.display = 'none'
  }, 2000);
}

const showSpecificMessage = (primaryMessage, secondaryMessage, type) => {
  const messageNode = getElementById('message_specific');
  if (type == 200) messageNode.style.background = 'rgb(0 0 0 / 10%)'
  else messageNode.style.background = 'rgb(203 32 32 / 10%)'
  messageNode.innerHTML = primaryMessage + '<br/>' + secondaryMessage;
  messageNode.style.display = 'flex';
  setTimeout(() => {
   messageNode.style.display = 'none'
  }, 2000);
}

const showFrogMessage = (primaryMessage, secondaryMessage, type = 401) => {
  const messageNode = getElementById('message_frog');
  if (type == 200) messageNode.style.background = 'rgb(0 0 0 / 10%)'
  else messageNode.style.background = 'rgb(203 32 32 / 10%)'
  messageNode.innerHTML = primaryMessage + '<br/>' + secondaryMessage;
  messageNode.style.display = 'flex';
  setTimeout(() => {
   messageNode.style.display = 'none'
  }, 2000);
}

const removeContactsBar = () => {
  getElementById('remainingContact_Web').remove();
  getElementById('remainingContact_Specific').remove();
  getElementById('remaining_contacts').remove();
  getElementById('remaining_contacts_specific').remove();
  getElementById('remainingContact_Frog').remove();
  getElementById('remaining_contacts_frog').remove();
}

const setFreeTrialRestrictions = () => {
  [...document.querySelector('div[data-name="specific"]').querySelectorAll('input')].forEach(item => item.setAttribute('disabled', true));
  [...document.querySelector('div[data-name="frog"]').querySelectorAll('input')].forEach(item => item.setAttribute('disabled', true));
  [...document.querySelector('div[data-name="frog"]').querySelectorAll('textarea')].forEach(item => item.setAttribute('disabled', true));
  const leapfrogButton = getElementById('leap_frog')
  leapfrogButton.innerText = 'Upgrade to access this feature!';
  leapfrogButton.disabled = 'true';
  const leapSpecificButton = getElementById('leap_specific')
  leapSpecificButton.innerText = 'Upgrade to access this feature!';
  leapSpecificButton.disabled = 'true';

}

// FUNCTIONS
const getFormData = (formSelector, allRequired, separateBy) => {
  var formInputs = document.querySelector(formSelector).querySelectorAll("[id]:not([type=\"file\"])"),
    formData = {},
    noBlank = true;
  formInputs.forEach(formInput => {
    if (!formInput) return;
    if (!formInput.value) noBlank = false;
    var inputName = formInput.getAttribute("id");
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
  extensionVersion.innerHTML = `<a href="https://www.leap.green/contact" target= "_blank" style="font-size: 1.075em; color: white">Contact Support</a>`
};

chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, async (tabs) => {
  const url = tabs[0].url;
  if (url.includes('https://www.linkedin.com/in')) {
    getElementById('connections_div').style.display = 'flex';
    getElementById('numberOfContacts').value = 1;
    getElementById('numberOfContacts').setAttribute('disabled', true);
    getElementById('keywords').setAttribute('disabled', true);
    getElementById('keywords').value = "none"
    // getElementById('numberOfContacts_specific').value = 1;
    // getElementById('numberOfContacts_specific').setAttribute('disabled', true);
    // getElementById('keywords_specific').setAttribute('disabled', true);
    // getElementById('geography').setAttribute('disabled', true);
    // getElementById('industry').setAttribute('disabled', true);
  }

})

document.getElementById('form_specific').addEventListener('submit', (e) => {
  e.preventDefault();
  let data = getFormData('form');
  if (!data.numberOfContacts_specific) {
    showSpecificMessage("Invalid", "Number of contacts cannot be empty!", 400);
  } else {
  const numberOfContacts = getElementById('numberOfContacts_specific').value;
  const contactsLeft = getLocal('contactsLeft');
  if (contactsLeft < numberOfContacts) {
    showSpecificMessage("Not Enough Contacts","Please Update Your Plan!");
  } else {
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
          emailAddress: getLocal('emailAddress'),
          numberOfContacts,
          keywords: data.keywords_specific,
          industry: data.industry,
          geography: data.geography,
          employeesMin: data.min_employee,
          employeesMax: data.max_employee,
          revenueMin: data.revenueMin,
          revenueMax: data.revenueMax,
          type: 'SPECIFIC',
        })
      })
    });
    showSpecificMessage("Successfully Leaped", "Check Your Email Shortly", 200)
  }
  }
})



getElementById('connections').addEventListener('change', (e) => {
 if (e.target.checked) {
  getElementById('numberOfContacts').value = 1;
  getElementById('numberOfContacts').removeAttribute('disabled');
  getElementById('keywords').removeAttribute('disabled');
  getElementById('keywords').value = '';
 } else {
  getElementById('numberOfContacts').value = 1;
  getElementById('numberOfContacts').setAttribute('disabled', true);
  getElementById('keywords').setAttribute('disabled', true);
  getElementById('keywords').value = "none"
 }
})

document.getElementById('leap').addEventListener('click', () => {
  const contactsLeft = getLocal('contactsLeft');
  const numberOfContacts = document.getElementById('numberOfContacts').value;
  const connections = getElementById('connections')?.checked;
  if (!numberOfContacts) {
    showMessage("Invalid", "Number of contacts cannot be empty!", 400);
  } else if (contactsLeft < numberOfContacts) {
    showMessage("Not Enough Contacts","Please Update Your Plan!")
  } else {
    const keywords = getElementById('keywords').value;
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, async (tabs) => {
      const url = new URL(tabs[0].url);
      let formattedUrl;
      if (url.href.includes('linkedin')) {
        formattedUrl = url;
      } else formattedUrl = url.origin;
      const res = await fetch("https://leap-extension.herokuapp.com/saveData", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          fullName: getLocal('username'),
          company: getLocal('company'),
          emailAddress: getLocal('emailAddress'),
          numberOfContacts,
          keywords: keywords,
          url: formattedUrl,
          connections: connections || false,
          type: 'WEB'
        })
      })
      showMessage('Successfully Leaped', 'Check Email Shortly', 200);

    });
  }
})

document.getElementById('leap_frog').addEventListener('click', async() => {
  const text = getElementById('leapInfo').value;
  const contactsLeft = getLocal('contactsLeft');
  const numberOfContacts = document.getElementById('numberOfContacts_Frog').value;
  if (!numberOfContacts) showFrogMessage("Invalid", "Contacts cannot be empty", 400);
  else if (!text) showFrogMessage("Invalid", "Text cannot be empty", 400);
  else if (numberOfContacts > contactsLeft) showFrogMessage("Not Enough Contacts","Please Update Your Plan!", 400)
  else {
    const res = await fetch("https://leap-extension.herokuapp.com/saveData", {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        fullName: getLocal('username'),
        company: getLocal('company'),
        emailAddress: getLocal('emailAddress'),
        text: text,
        numberOfContacts,
        type: 'FROG'
      })
    })
    showFrogMessage('Successfully Leaped', 'Check Email Shortly', 200);
    
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
				<form id="licensing" style="margin: 64px 40px 40px; zoom: 1.125; text-align: justify;">
					<div id="licensingMessage"></div>
          <div style="
          display: flex;
          justify-content: center;
      ">	<img src="../theme/assets/images/leapblack.png" height= "50"/></div>
				
					<span class="input-label-top">Please enter your license key to activate this extension:</span><br />
					<input type="text" id="licenseKey">
					<button type="submit">Activate</button>
					<span class="input-label-top" style="margin-top: 7.5px;">Don't have a license key? Click <a href="https://www.leap.green/contact" target="_blank">here</a></span>
					<span class="input-label-top" style="margin-top: 7.5px;">If you would like to book a Leap Demo Click <a href="https://www.leap.green/book-a-demo" target="_blank">here</a></span>
				</form>
			</div>
		`
    document.querySelector('[id="licensing"]').addEventListener('submit', async thisEvent => {
      thisEvent.preventDefault();
      console.log(getFormData('form#licensing'));
      licensingNode.style.display = 'none'
      const licensingStatus = await fetch("https://leap-extension.herokuapp.com/license", {
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          licenseKey: getFormData('form#licensing').licenseKey
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
    const currentLicense = licensingStatus.validLicenses['Personal_Use-Monthly'] || licensingStatus.validLicenses['Free_Trial'] || licensingStatus.validLicenses['Full_Access-Monthly'] || licensingStatus.validLicenses['Personal_Use-Yearly'] || licensingStatus.validLicenses['Full_Access-Yearly'];
    getElementById('remaining_contacts').innerText += ": " + currentLicense.contactsLeft;
    getElementById('remaining_contacts_specific').innerText += ": " + currentLicense.contactsLeft;
    getElementById('remaining_contacts_frog').innerText += ": " + currentLicense.contactsLeft;
    let percentage = currentLicense.contactsLeft;
    if (!currentLicense.feature) {
      setFreeTrialRestrictions()
      document.querySelector('div[data-name="specific"]').setAttribute('disabled', true);
      percentage = ((currentLicense.contactsLeft / 100) * CONTACTS.Free_Trial) * 100;
    }
    console.log(percentage);
    [...document.getElementsByClassName('progress')].forEach(item => item.style.width = `${percentage}%`)

    setLocal('contactsLeft', currentLicense.contactsLeft);
    if (currentLicense.contactsLeft > 200) {
      removeContactsBar();
     
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