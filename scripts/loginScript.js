console.log("Good Evening People of the Great Country of the United States of America I hope you are all ready for a glorious day on this fine Earth that we find ourselves Residing In!")



function registerButton() {
    phoneButton = document.getElementById("ContactPhone");
    emailButton = document.getElementById("ContactEmail");
    if (phoneButton.checked) {
        document.getElementById("phone").style.display = "block";
        document.getElementById("phoneText").style.display = "block";
        document.getElementById("email").style.display = "none";
        document.getElementById("emailText").style.display = "none";
    }

    if (emailButton.checked) {
        document.getElementById("phone").style.display = "none";
        document.getElementById("phoneText").style.display = "none";
        document.getElementById("email").style.display = "block";
        document.getElementById("emailText").style.display = "block";
    }
}
