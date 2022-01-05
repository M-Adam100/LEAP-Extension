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
   getElementById('leap_frog').removeAttribute('disabled');
  }, 2000);
}

const checkMinMax = () => {
  const minEmployee = getElementById('min_employee').value;
  const max_employee = getElementById('max_employee').value;
  if (minEmployee && max_employee) {
    if (minEmployee > max_employee) return false;
  }

  const minRevenue = getElementById('min_revenue').value;
  const maxRevenue = getElementById('max_revenue').value;
  if (minRevenue && maxRevenue) {
    if (minRevenue > maxRevenue) return false;
  } 
  return true;
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
  leapfrogButton.innerHTML = `<a class="upgrade" href="https://www.leap.green/pricing" target="_blank"> Upgrade to access this feature!</a>`;
  leapfrogButton.disabled = 'true';
  const leapSpecificButton = getElementById('leap_specific')
  leapSpecificButton.innerHTML = `<a class="upgrade" href="https://www.leap.green/pricing" target="_blank"> Upgrade to access this feature!</a>`;
  leapSpecificButton.disabled = 'true'
}

const checkFormData = (data) => {
  if ([...Object.values(data)].filter(item => item).length > 1) return true;
  else  return false;
}

const updateContact = (contacts) => {
  getElementById('remaining_contacts').innerText = "Contacts Remaining: " + contacts;
  getElementById('remaining_contacts_specific').innerText = "Contacts Remaining: " + contacts;
  getElementById('remaining_contacts_frog').innerText = "Contacts Remaining: " + contacts;
  let percentage = contacts;
  setLocal('contactsLeft', contacts);
  if (!getLocal('feature')) {
    document.querySelector('div[data-name="specific"]').setAttribute('disabled', true);
    percentage = ((contacts/ 100) * CONTACTS.Free_Trial) * 100;
  }
  [...document.getElementsByClassName('progress')].forEach(item => item.style.width = `${percentage}%`)
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
    //getElementById('connections_div').style.display = 'flex';
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
  } else if (!checkFormData(data)) {
    showSpecificMessage("Invalid", "Kindly select at least one other field!");
  } else if (!checkMinMax()) {
    showSpecificMessage("Invalid", "Kindly recheck min/max values!");
  } else {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, async (tabs) => {
      console.log(data);
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
          revenueMin: data.min_revenue,
          revenueMax: data.max_revenue,
          type: 'SPECIFIC',
        })
      })
    const response = await res.json();
    updateContact(contactsLeft);
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
      const response = await res.json();
      updateContact(response.contactsLeft)
      showMessage('Successfully Leaped', 'Check Email Shortly', 200);

    });
  }
})

const setIndustries = () => {
 
  const industryList = document.querySelector('#industry');
  Industries.forEach(item => {
    industryList.innerHTML += `<option value="${item}">${item}</option>`
  })
  autocomplete(industryList, Industries);
}

const setCountries = () => {
 
  const countryList = document.querySelector('#geography');
  countries.forEach(item => {
    countryList.innerHTML += `<option value="${item}">${item}</option>`
  })
  autocomplete(countryList, countries);
}

setIndustries();
setCountries();

document.getElementById('leap_frog').addEventListener('click', async() => {
  const text = getElementById('leapInfo').value;
  const contactsLeft = getLocal('contactsLeft');
  const numberOfContacts = document.getElementById('numberOfContacts_Frog').value;
  if (!numberOfContacts) showFrogMessage("Invalid", "Contacts cannot be empty", 400);
  else if (!text) showFrogMessage("Invalid", "Text cannot be empty", 400);
  else if (numberOfContacts > contactsLeft) showFrogMessage("Not Enough Contacts","Please Update Your Plan!", 400)
  else {
    getElementById('leap_frog').setAttribute('disabled', true);
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
    const response = await res.json();
    updateContact(response.contactsLeft);
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
					<span class="input-label-top" style="margin-top: 7.5px;">Don't have a license key? Click <a href="https://www.leap.green/book-a-demo" target="_blank">here</a></span>
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
    } else setLocal('feature', true);
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

//MULTI SELECT
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value.trim();
      var prevValue = this.value;
      if (this.value.includes(","))  {
        console.log("TRUE");
      }
    val = val.split(',').reverse()[0].trim();
    console.log(val);

      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("div");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              if (prevValue.includes(',')) {
                const lastOcc = prevValue.lastIndexOf(',');
                prevValue = prevValue.substr(0,lastOcc + 2);
                inp.value = prevValue + this.getElementsByTagName("input")[0].value + ', ';
              } else inp.value = this.getElementsByTagName("input")[0].value + ', ';
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
