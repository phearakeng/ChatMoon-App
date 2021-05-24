// ======================= |PORT| ======================= //
const IP = "192.168.88.32";
const PORT = 3000;
const LOGIN_URL = "http://" + IP + ":" + PORT + "/app";
// ======================= |PORT| ======================= //

// ======================= |Send Message| ======================= //

let Wrapper = document.querySelector(".content_Chat");
const Message = document.querySelector("#messages");

function getMessage(e) {
    
    let Chat_Box = document.createElement("div");
    Chat_Box.className = "chat-box";
    Wrapper.appendChild(Chat_Box);

    let chat_outgoing = document.createElement("div");
    chat_outgoing.className = "chat outgoing";
    Chat_Box.appendChild(chat_outgoing);

    let Detailes = document.createElement("div");
    Detailes.className = "details";
    chat_outgoing.appendChild(Detailes);

    let P = document.createElement("p");
    Detailes.appendChild(P);
    
    let images = document.createElement("img");
    images.src = "../image/PHEARA_ENG.jpg";
    chat_outgoing.appendChild(images);
    
    P.textContent += Message.value;
    Message.value == "";
    
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", getMessage);
// ======================= |Send Message| ======================= //

// ======================= |USER-LIST| ======================= //
function getAudio() {
    audio.play();
}
let myAudio = document.querySelector("#myAudio");
myAudio.addEventListener("click", getAudio);
// ======================= |USER-LIST| ======================= //

// ================================| Key Up |=============================== //
Message.addEventListener("keyup", function (event){
    if(event.keyCode === 13){
        getMessage();
    }
})
// ================================| Key Up |=============================== //

// ================================| Emoji |=============================== //
const Emoji = document.querySelector("#emoji");
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    Emoji.addEventListener('click', () => {
        picker.togglePicker(Emoji);
    });
});
// ================================| Emoji |=============================== //

// ================================| Bold Character |=============================== //

const btnBold = document.querySelector("#bold");
btnBold.onclick = () => {
    if (Message.type == "text") {
        Message.style.fontWeight = "bold";
    }else {
        Message.style.fontWeight = "text";
    }
}
// ================================| Bold Character |=============================== //

// ================================| Italic Character |=============================== //
const btnItalic = document.querySelector("#italic");
btnItalic.onclick = () => {
    if (Message.type == 'text') {
        Message.style.fontStyle = 'italic';
        btnItalic.classList.add("active");
    }else {
        getPass.type = "text";
        Message.style = "text";
    }
}
// ================================| Italic Character |=============================== //

// ================================| LOGIN |=============================== //

// function getLogin() {
//     let email_login = document.querySelector("#email_login").value;
//     let pass_login = document.querySelector("#password").value;
//     console.log(email_login);
//     console.log(pass_login);
// }

// let btnLogin = document.querySelector("#submit_login");
// btnLogin.addEventListener("click", getLogin);

// ================================| LOGIN |=============================== //