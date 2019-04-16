var contactName = document.getElementById('contactName')
var phoneNumber = document.getElementById('phoneNumber')
var emailAddress = document.getElementById('emailAddress')


contactName.oninput = function (event) {
    contactName.checkValidity(); 
};

phoneNumber.oninput = function (event) {
    phoneNumber.checkValidity(); 
};

emailAddress.oninput = function (event) {
    emailAddress.checkValidity();  
};

contactName.oninvalid = checkInput; 
phoneNumber.oninvalid = checkInput; 
emailAddress.oninvalid = checkInput; 

function checkInput(e) { 
    InputBox = event.target;
    

    if (!InputBox.validity.valid) { 
        if (InputBox == contactName) { 
            InputBox.setCustomValidity("");
            if (InputBox.value.length == 0) {
                InputBox.setCustomValidity(" Please provide a contact name.");
            } else if (InputBox.value.length < 5) {
                InputBox.setCustomValidity("Contact name must be at least 5 characters.");
            }
        }

        if (InputBox == phoneNumber) { 
            InputBox.setCustomValidity("");
            if (InputBox.validity.valueMissing) {
                InputBox.setCustomValidity(" Please provide a phone number.");
            }
            if (InputBox.validity.patternMismatch) {
                InputBox.setCustomValidity(" Please follow the provided format.");
            }
        }

        if (InputBox == emailAddress) { 
            InputBox.setCustomValidity("");
            if (InputBox.validity.valueMissing) {
                InputBox.setCustomValidity("Value is missing");
            }
            if (InputBox.validity.typeMismatch) {
                InputBox.setCustomValidity(" Value is not a valid email (type mismatch)");
            }
        }
    }
};
