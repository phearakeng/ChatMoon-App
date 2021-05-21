// |============================|Code JAVASCRIPT App|============================| //

const getPass = document.getElementById("password");
const getIcon_Pass = document.querySelector(".field i");

getIcon_Pass.onclick = () => {
    if (getPass.type == "password") {
        getPass.type = "text";
        getIcon_Pass.classList.add("active");
    }else {
        getPass.type = "password";
        getIcon_Pass.classList.remove("active");
    }
}

// function getData(event) {
//     event.preventDefault();

//     const first_Name = document.querySelector("#first_Name").value;
//     const last_Name = document.querySelector("#last_Name").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     const file = document.querySelector("#file").value;

//     console.log(first_Name);
//     console.log(last_Name);
//     console.log(email);
//     console.log(password);
//     console.log(file);
// }

// const btnSubmit = document.querySelector("#submit");
// btnSubmit.addEventListener("click", getData);


// |============================|Code JAVASCRIPT Login|============================| //
// function getData_Login(e) {

//     const Email_Log = document.querySelector("#email_login").value;
//     const Pass_Log = document.querySelector("#pass_login").value;

//     console.log(Email_Log);
//     console.log(Pass_Log);
// }

// const btnSub_Log = document.querySelector("#submit_login");
// btnSub_Log.addEventListener("click", getData_Login);


// |============================|Code JAVASCRIPT User|============================| //


// |============================|Code JAVASCRIPT Chat|============================| //