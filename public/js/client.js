// |============================|CLOSE EYE|=======================| //

const IP = "192.168.88.32";
const PORT = 3000;
const LOGIN_URL = "http://" + IP + ":" + PORT + "/client";

// |============================|CLOSE EYE|=======================| //

let getPass = document.getElementById("password");
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

// |============================|CLOSE EYE|=======================| //
// |============================|SIGN-UP|=======================| //

function getSignup(event) {
    event.preventDefault();

    const first_Name = document.querySelector("#first_Name").value;
    const last_Name = document.querySelector("#last_Name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const file = document.querySelector("#file").value;

    console.log(first_Name);
    console.log(last_Name);
    console.log(email);
    console.log(password);
    console.log(file);
}
const btnSubmit = document.querySelector("#submit");
btnSubmit.addEventListener("click", getSignup);

// |============================|SIGN-UP|=======================| //

// let User_List = document.createElement("div");
// User_List.className = "users";
// User_List.appendChild(Header);

// let Header = document.createElement("header");
// Header.appendChild(Content);

// let Content = document.createElement("div");
// Content.className = "content";

// let Image = document.createElement("img");
// Image.src="../image/PHEARA_ENG.jpg";
// Content.appendChild(Image);

// let Detailes = document.createElement("div");
// Detailes.className = "details";
// Content.appendChild(Detailes);

// let Span = document.createElement("span");
// Span.textContent = "Hello";
// Detailes.appendChild(Span);

// let P = document.createElement("p");
// Detailes.appendChild(P);

// |============================|SIGN-UP|=======================| //

