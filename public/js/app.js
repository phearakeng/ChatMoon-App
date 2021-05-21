// ======================= |Close Eye Password| ======================= //

const searchBar = document.querySelector("#search");
const btnSearch = document.querySelector("button");

btnSearch.onclick = () => {
    searchBar.classList.add("active");
    btnSearch.focus();
}
let messages = []

// ======================= |Close Eye Password| ======================= //

// ======================= |Send Message| ======================= //

function getMessage(e) {
    e.preventDefault();

    let Wrapper = document.querySelector(".content_Chat");
    
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
    
    const Message = document.querySelector("#messages");
    P.textContent += Message.value;
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", getMessage);

// ======================= |Send Message| ======================= //

let form = document.createElement("form");
form.className = "typing-area";

let button = document.createElement("button");

// ================================| Emoji |=============================== //

const Emoji = document.querySelector("#emoji");

// import { EmojiButton } from '@joeattardi/emoji-button';

// const picker = new EmojiButton();

// picker.on('emoji', selection => {
    
// });

// Emoji.addEventListener('click', () => picker.togglePicker(Emoji));

// ================================| Emoji |=============================== //


const picker = new EmojiButton();

// Emoji selection
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    Emoji.addEventListener('click', () => {
        picker.togglePicker(Emoji);
    });
});