console.log("Good Evening People of the Great Country of the United States of America I hope you are all ready for a glorious day on this fine Earth that we find ourselves Residing In!")



function registerRadio() {
    let phoneButton = document.getElementById("ContactPhone");
    let emailButton = document.getElementById("ContactEmail");
    if (phoneButton.checked) {
        document.getElementById("phone").style.display = "block";
        document.getElementById("phone").value = "";
        document.getElementById("phoneText").style.display = "block";
        document.getElementById("email").style.display = "none";
        document.getElementById("emailText").style.display = "none";
    }

    if (emailButton.checked) {
        document.getElementById("phone").style.display = "none";
        document.getElementById("phoneText").style.display = "none";
        document.getElementById("email").style.display = "block";
        document.getElementById("email").value = "";
        document.getElementById("emailText").style.display = "block";

    }
}

function register(event) {
    event.preventDefault();
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let confpass = document.getElementById("confirmpass").value;
    let emailButton = document.getElementById("ContactEmail");
    let phoneButton = document.getElementById("ContactPhone");
    let emailText = document.getElementById("email").value;
    let phoneText = document.getElementById("phone").value;
    if (password == confpass && password.length > 0) {
        console.log("passwords are matching");
        if (username.length > 0) {
            if (emailButton.checked && emailText.length > 0) {
                let userInfo = [username, password, emailText];
                console.log(userInfo);
            } else if (phoneButton.checked && phoneText.length > 0) {
                let userInfo = [username, password, phoneText];
                console.log(userInfo);
            } else {
                alert("Either email or phone must content in them");
            }
        }
    } else if (password.length == 0 || confpass.length == 0) {
        alert("Both passwords must have content in them to proceed");
    } else {
        alert("Passwords do not match, please reenter them");l
    }

}
