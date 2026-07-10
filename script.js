const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Send button
sendBtn.addEventListener("click", sendMessage);

// Press Enter to send
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.toLowerCase().trim();

    if (!message) return;

    displayMessage(message, "user");
    userInput.value = "";
    userInput.focus();

    // Show typing indicator
    const typingElement = document.createElement("div");
    typingElement.classList.add("message", "bot");
    typingElement.id = "typing";
    typingElement.textContent = "DecodeBot is typing...";
    chatBox.appendChild(typingElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Delay bot response
    setTimeout(() => {
        typingElement.remove();
        getBotResponse(message);
    }, 1000);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {

    let response = "";

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey") ||
        message.includes("greetings") ||
        message.includes("good morning") ||
        message.includes("good afternoon") ||
        message.includes("good evening") ||
        message.includes("howdy") ||
        message.includes("salutations") ||
        message.includes("what's up") ||
        message.includes("yo") ||
        message.includes("hiya") ||
        message.includes("sup") ||
        message.includes("g'day") ||
        message.includes("bonjour") ||
        message.includes("hola") ||
        message.includes("ciao") ||
        message.includes("namaste")
    ) {

        response = "Hello! How can I assist you today?";

    } else if (message.includes("help")) {

        response = "Sure! What do you need help with?";

    } else if (message.includes("bye")) {

        response = "Goodbye! Have a great day!";

    } else if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {

        response = "You're welcome! If you have any more questions, feel free to ask.";

    } else if (
        message.includes("what is your name") ||
        message.includes("who are you")
    ) {

        response = "I am DecodeBot, your friendly assistant!";

    } else if (
        message.includes("how are you") ||
        message.includes("how's it going") ||
        message.includes("are you okay") ||
        message.includes("how do you feel")
    ) {

        response = "I'm doing well, thank you for asking! How can I assist you today?";

    } else if (
        message.includes("what can you do") ||
        message.includes("capabilities")
    ) {

        response = "I can answer questions, tell jokes, show the current date and time, motivate you, and much more.";

    } else if (
        message.includes("joke") ||
        message.includes("funny")
    ) {

        response = "Why don't scientists trust atoms? Because they make up everything! 😂";

    } else if (message.includes("weather")) {

        response = "I can't access live weather yet, but you can ask me again after I'm connected to a weather API.";

    } else if (message.includes("time")) {

        response = `The current time is ${new Date().toLocaleTimeString()}.`;

    } else if (message.includes("date")) {

        response = `Today's date is ${new Date().toLocaleDateString()}.`;

    } else if (message.includes("news")) {

        response = "I can't access live news yet, but I can once I'm connected to a news API.";

    } else if (message.includes("quote")) {

        response = '"The only way to do great work is to love what you do." — Steve Jobs';

    } else if (
        message.includes("motivation") ||
        message.includes("inspiration")
    ) {

        response = "Keep pushing forward! Every small step counts. 💪";

    } else if (message.includes("translate")) {

        response = "Translation support can be added later using a translation API.";

    } else if (
        message.includes("math") ||
        message.includes("calculate")
    ) {

        response = "Math calculations can be added in the next version.";

    } else if (
        message.includes("created by") ||
        message.includes("developer")
    ) {

        response = "I was created by Rihanat.";

    } else if (
        message.includes("who is rihanat") ||
        message.includes("rihanat")
    ) {

        response = "Rihanat is the frontend developer who created me. 🚀";

    } else if (
        message.includes("decodebot")
    ) {

        response = "DecodeBot is a rule-based AI chatbot built using HTML, CSS and JavaScript.";

    } else if (
        message.includes("purpose")
    ) {

        response = "My purpose is to help users by answering questions and demonstrating how a rule-based chatbot works.";

    } else if (
        message.includes("favorite color")
    ) {

        response = "I don't have a favorite color, but blue looks pretty cool. 😄";

    } else if (
        message.includes("favorite food")
    ) {

        response = "I don't eat, but I hear pizza is amazing! 🍕";

    } else if (
        message.includes("favorite movie")
    ) {

        response = "I don't watch movies, but I can recommend some.";

    } else if (
        message.includes("favorite book")
    ) {

        response = "I don't read books, but I can recommend great ones.";

    } else if (
        message.includes("favorite song")
    ) {
        response = "I don't listen to music, but I know lots of songs.";

    } else if (
        message.includes("I'm good") ||
        message.includes("I'm fine") ||
        message.includes("I'm okay") ||
        message.includes("I'm great")
    ) {
        response = "That's great to hear! How can I assist you today?";

    }
    
    else {

        response = "Sorry, I don't understand that yet. I'm still learning! 😊";
    }

    displayMessage(response, "bot");
}