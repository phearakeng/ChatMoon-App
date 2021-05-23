// |============================|App.html & Login.html|============================| //
// |============================|PORT|============================| //
const IP = "192.168.88.32";
const PORT = 3000;
const LOGIN_URL = "http://" + IP + ":" + PORT + "/login";
// |============================|PORT|============================| //

// ========================== |LOGIN| ========================== //

function getLogin(e) {
    e.preventDefault(); 

    let querry = LOGIN_REQUEST + "?username=" + email_login.value + "&" + "password=" + getPass.value;
    axios.get(querry).then((response) => {
        let isValid = response.data;
        let text = "Not found!!";
        let color = "red";
    
        if (isValid) {
            text = "Login successfully!";
            color = "green";
        }
        console.log(isValid);
        Information.textContent = text;
        Information.style.color = color;
    });
}

let email_login = document.querySelector("#email_login");
let Information = document.querySelector("#info");
let getPass = document.querySelector("#password");
let btnLogin = document.querySelector("#submit_login");

btnLogin.addEventListener("click", getLogin);

// ========================== |LOGIN| ========================== //

// |============================|CLOSE EYE|=======================| //

let getIcon_Pass = document.querySelector(".field i");
getIcon_Pass.onclick = () => {
    if (getPass.type == "password") {
        getPass.type = "text";
        getIcon_Pass.classList.add("active");
    }else {
        getPass.type = "password";
        getIcon_Pass.classList.remove("active");
    }
}
// |=========================|CLOSE EYE|========================| //