// chat.js
function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message !== "") {
        const chatBox = document.getElementById("chatMessages");
        const msgElement = document.createElement("div");
        msgElement.textContent = message;
        msgElement.classList.add("message");
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";
    }
}