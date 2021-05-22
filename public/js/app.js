// ======================= |Search| ======================= //

// const searchBar = document.querySelector("#search");
// const btnSearch = document.querySelector("button");

// // btnSearch.onclick = () => {
// //     searchBar.classList.add("active");
// //     btnSearch.focus();
// // }
// let messages = []

// ======================= |Search| ======================= //

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
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", getMessage);
// ======================= |Send Message| ======================= //

// ======================= |USER-LIST| ======================= //

// let users_list = document.createElement("div");
// users_list.className = "users-list";

let a_href = document.createElement("href");
console.log(a_href);

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
        Message.style.fontStyle = 'italics';
        btnItalic.classList.add("active");
    }else {
        getPass.type = "text";
        Message.style = "text";
    }
}
// ================================| Italic Character |=============================== //

// ================================| Voice Sound |=============================== //



// ================================| Voice Sound |=============================== //