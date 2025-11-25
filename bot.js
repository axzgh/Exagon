const API_KEY = "AQUI_PONES_TU_API_KEY"; 

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const chatBox = document.getElementById("chat");
const input = document.getElementById("msg-input");
const btn = document.getElementById("send-btn");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = "msg " + sender;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "mistral",
            messages: [
                { role: "user", content: text }
            ]
        })
    })
    .then(res => res.json())
    .then(data => {
        const reply = data.choices[0].message.content;
        addMessage(reply, "bot");
    })
    .catch(() => {
        addMessage("Error... tu API se murió o hiciste algo mal.", "bot");
    });
});
