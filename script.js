const chatBot = document.getElementById('chatBot');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
    const message = userInput.value.toLowerCase().trim();
    if (message) {
        displayMessage('User', message);
        userInput.value = '';
        getBotResponse(message);
    }
})