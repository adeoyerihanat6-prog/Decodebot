const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    const message = userInput.value.toLowerCase().trim();

    if (message) {
        displayMessage(message, "user");
        userInput.value = "";
        getBotResponse(message);
    }
});

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    let response = "";

    if (message.includes("hello ") || message.includes("hi") || message.includes("hey") || message.includes("greetings") || message.includes("good morning") || message.includes("good afternoon") || message.includes("good evening")|| message.includes("howdy") || message.includes("salutations") || message.includes("what's up") || message.includes("yo") || message.includes("hiya") || message.includes("sup") || message.includes("g'day") || message.includes("bonjour") || message.includes("hola") || message.includes("ciao") || message.includes("namaste")) {
        response = "Hello! How can I assist you today?";
    } else if (message.includes("help")) {
        response = "Sure! What do you need help with?";
    } else if (message.includes("bye")) {
        response = "Goodbye! Have a great day!";
    }
    else if (message.includes("thank you") || message.includes("thanks")) {
        response = "You're welcome! If you have any more questions, feel free to ask.";
    }
    else if (message.includes("what is your name") || message.includes("who are you")) {
        response = "I am Decodebot, your friendly assistant!";
    }
    else if (message.includes("how are you") || message.includes("how's it going")) {
        response = "I'm just a bot, but I'm here to help you!";
    }
    else if (message.includes("what can you do") || message.includes("capabilities")) {
        response = "I can assist you with various tasks, answer questions, and provide information. Just ask!";
    }
    else if (message.includes("joke") || message.includes("funny")) {
        response = "Why don't scientists trust atoms? Because they make up everything!";
    }
    else if (message.includes("weather")) {
        response = "I can provide weather information. Please specify the location.";
    }
    else if (message.includes("time")) {
        const currentTime = new Date().toLocaleTimeString();
        response = `The current time is ${currentTime}.`;
    }
    else if (message.includes("date")) {
        const currentDate = new Date().toLocaleDateString();
        response = `Today's date is ${currentDate}.`;
    }
    else if (message.includes("news")) {
        response = "I can provide you with the latest news. Please specify the topic or category you're interested in.";
    }
    else if (message.includes("quote")) {
        response = "Here's a quote for you: 'The only way to do great work is to love what you do.' - Steve Jobs";
    }
    else if (message.includes("motivation") || message.includes("inspiration")) {
        response = "Keep pushing forward! Every step you take brings you closer to your goals.";
    }
    else if (message.includes("translate")) {
        response = "I can help with translations. Please specify the text and the target language.";
    }
    else if (message.includes("math") || message.includes("calculate")) {
        response = "I can assist with math calculations. Please provide the expression you'd like to calculate.";
    }
    else if (message.includes("created by") || message.includes("developer")) {
        response = "I was created by Rihanat. ";
    }
    else if (message.includes("who is rihanat") || message.includes("rihanat")) {
        response = "Rihanat is the developer who created me. You can learn more about Rihanat by visiting their website or social media profiles.";
    }
    else if (message.includes("what is decodebot") || message.includes("decodebot")) {
        response = "Decodebot is an AI-powered chatbot designed by Rihanat to assist users with various tasks, answer questions, and provide information.";
    }
    else if (message.includes("what is your purpose") || message.includes("purpose")) {
        response = "My purpose is to assist users by providing information, answering questions, and helping with various tasks.";
    }
    else if (message.includes("what is your favorite color") || message.includes("favorite color")) {
        response = "As an AI, I don't have personal preferences, but I can help you find information about colors!";
    }
    else if (message.includes("what is your favorite food") || message.includes("favorite food")) {
        response = "I don't eat food, but I can provide you with information about different cuisines and recipes!";
    }
    else if (message.includes("what is your favorite movie") || message.includes("favorite movie")) {
        response = "I don't watch movies, but I can recommend popular films or provide information about them!";
    }
    else if (message.includes("what is your favorite book") || message.includes("favorite book")) {
        response = "I don't read books, but I can suggest popular books or provide summaries of them!";
    }
    else if (message.includes("what is your favorite song") || message.includes("favorite song")) {
        response = "I don't listen to music, but I can recommend popular songs or provide information about different genres!";
    }
    else if (message.includes("How are you?") || message.includes("are you okay?") || message.includes("how's it going?") || message.includes("how do you feel?")) {
        response = "I'm doing well, thank you for asking! How can I assist you today?";
    }
    else {
        response = "I'm not sure how to respond to that. Can you please clarify?";
    }
    displayMessage(response, "bot");
}