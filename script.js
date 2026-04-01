const chatDisplay = document.getElementById('chatDisplay');
const userInput = document.getElementById('userInput');
const slideMenu = document.getElementById('slideMenu');
const langSwitch = document.getElementById('langSwitch');

const responses = {
    en: {
        welcome: "I am <b>Abhimanyu</b>, your Personal Digital Assistant. I can help you in getting answer to your queries related to KSRTC.",
        cancel: "Yes. The Tickets booked online can be cancelled only online.",
        pnr: `To know the current status of your PNR, <a href="https://www.ksrtc.in/booking-enquiry" target="_blank" style="color: #1e3a8a; font-weight: bold;">click here</a>`,
        booking: `<b>KSRTC tickets can be booked through:</b><br><br>
1. <b>KSRTC COUNTERs:</b> You can visit to any of our KSRTC counters.<br><br>
2. <b>KSRTC authorized franchisee counters:</b> The customer has to approach the authorized franchisee of KSRTC and buy a ticket on payment of requisite fare.<br><br>
3. <b>Online (E-ticket/ M-ticket):</b> This facility is available through KSRTC web site <a href="http://www.ksrtc.in" target="_blank">www.ksrtc.in</a> with the help of debit card, credit card and net banking.<br><br>
4. <b>Mobile Booking:</b> This facility is available through KSRTC web site www.ksrtc.in WAP and IOS & Android APP with the help of debit card, credit card and net banking.<br><br>
5. <b>Bangalore-One:</b> The customer has to approach the Bangalore-One Centres and buy a ticket on payment of requisite fare.<br><br>
6. <b>Mobile-One:</b> This facility is available through Karnataka Mobile-One App with the help of debit card, credit card and net banking.<br><br>
7. <b>Authorized Master franchisee website:</b> This facility is available through Travel portal such as Abhibus with the help of debit card, credit card and net banking. The procedure of ONLINE BOOKING applies to this booking.<br><br>
<b>There is no Phone Booking Option for KSRTC services.</b>`,
        refund: `<b>KSRTC Help Line:</b><br>General Enquiry: <b>080-26252625</b> (24 hours)<br>For more details: <a href="https://www.ksrtc.in" target="_blank" style="color: #1e3a8a; font-weight: bold;">Click here</a>`,
        routing: `To get information about Buses and Bus timings for your specific route, <a href="https://www.ksrtc.in" target="_blank" style="color: #1e3a8a; font-weight: bold;">click here</a>`,
        timings: `We have reserved and unreserved bus available and you can check the timings by <a href="https://www.ksrtc.in/" target="_blank" style="color: #1e3a8a; font-weight: bold;">clicking here</a>.`,
        notfound: "I didn't quite get that. Please try one of the FAQ questions or call 080-26252625.",
        placeholder: "Type your query here...",
        faq_title: "Frequently Asked Questions"
    },
    kn: {
        welcome: "ನಾನು <b>ಅಭಿಮನ್ಯು</b>, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡಿಜಿಟಲ್ ಸಹಾಯಕ. ಕೆಎಸ್ಆರ್ಟಿಸಿಗೆ ಸಂಬಂಧಿಸಿದ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ನೀಡಲು ನಾನು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.",
        cancel: "ಹೌದು. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಕಾಯ್ದಿರಿಸಿದ ಟಿಕೆಟ್‌ಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮಾತ್ರ ರದ್ದುಗೊಳಿಸಬಹುದು.",
        pnr: `ನಿಮ್ಮ ಪಿಎನ್‌ಆರ್ (PNR) ಸ್ಥಿತಿಯನ್ನು ತಿಳಿಯಲು <a href="https://www.ksrtc.in/booking-enquiry" target="_blank" style="color: #1e3a8a; font-weight: bold;">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>`,
        booking: `<b>ಕೆಎಸ್ಆರ್ಟಿಸಿ ಟಿಕೆಟ್‌ಗಳನ್ನು ಈ ಕೆಳಗಿನ ವಿಧಾನಗಳ ಮೂಲಕ ಬುಕ್ ಮಾಡಬಹುದು:</b><br><br>
1. <b>ಕೆಎಸ್ಆರ್ಟಿಸಿ ಕೌಂಟರ್‌ಗಳು:</b> ನೀವು ಯಾವುದೇ ಕೆಎಸ್ಆರ್ಟಿಸಿ ಕೌಂಟರ್‌ಗಳಿಗೆ ಭೇಟಿ ನೀಡಬಹುದು.<br><br>
2. <b>ಕೆಎಸ್ಆರ್ಟಿಸಿ ಅಧಿಕೃತ ಫ್ರಾಂಚೈಸಿ ಕೌಂಟರ್‌ಗಳು:</b> ಗ್ರಾಹಕರು ಕೆಎಸ್ಆರ್ಟಿಸಿ ಅಧಿಕೃತ ಫ್ರಾಂಚೈಸಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ ನಿಗದಿತ ದರ ಪಾವತಿಸಿ ಟಿಕೆಟ್ ಖರೀದಿಸಬಹುದು.<br><br>
3. <b>ಆನ್‌ಲೈನ್ (E-ticket/ M-ticket):</b> ಈ ಸೌಲಭ್ಯವು ಕೆಎಸ್ಆರ್ಟಿಸಿ ವೆಬ್‌ಸೈಟ್ <a href="http://www.ksrtc.in" target="_blank">www.ksrtc.in</a> ಮೂಲಕ ಡೆಬಿಟ್ ಕಾರ್ಡ್, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಮತ್ತು ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಸಹಾಯದಿಂದ ಲಭ್ಯವಿದೆ.<br><br>
4. <b>ಮೊಬೈಲ್ ಬುಕಿಂಗ್:</b> ಕೆಎಸ್ಆರ್ಟಿಸಿ ವೆಬ್‌ಸೈಟ್ ಅಥವಾ ಐಒಎಸ್ (iOS) ಮತ್ತು ಆಂಡ್ರಾಯ್ಡ್ ಆಪ್ ಮೂಲಕ ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡಬಹುದು.<br><br>
5. <b>ಬೆಂಗಳೂರು-ಒನ್:</b> ಗ್ರಾಹಕರು ಬೆಂಗಳೂರು-ಒನ್ ಕೇಂದ್ರಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ ನಿಗದಿತ ದರ ಪಾವತಿಸಿ ಟಿಕೆಟ್ ಖರೀದಿಸಬಹುದು.<br><br>
6. <b>ಮೊಬೈಲ್-ಒನ್:</b> ಕರ್ನಾಟಕ ಮೊಬೈಲ್-ಒನ್ ಆಪ್ ಮೂಲಕ ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಬಳಸಿ ಈ ಸೌಲಭ್ಯ ಪಡೆಯಬಹುದು.<br><br>
7. <b>ಅಧಿಕೃತ ಮಾಸ್ಟರ್ ಫ್ರಾಂಚೈಸಿ ವೆಬ್‌ಸೈಟ್:</b> ಅಭೀಬಸ್ (Abhibus) ನಂತಹ ಟ್ರಾವೆಲ್ ಪೋರ್ಟಲ್‌ಗಳ ಮೂಲಕ ಟಿಕೆಟ್ ಕಾಯ್ದಿರಿಸಬಹುದು.<br><br>
<b>ಕೆಎಸ್ಆರ್ಟಿಸಿ ಸೇವೆಗಳಿಗಾಗಿ ಯಾವುದೇ ಫೋನ್ ಬುಕಿಂಗ್ ಆಯ್ಕೆ ಲಭ್ಯವಿಲ್ಲ.</b>`,
        refund: `<b>ಸಹಾಯವಾಣಿ:</b><br>ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ: <b>080-26252625</b> (24 ಗಂಟೆಗಳು)<br>ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ: <a href="https://www.ksrtc.in" target="_blank" style="color: #1e3a8a; font-weight: bold;">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>`,
        routing: `ಬಸ್ಸುಗಳು ಮತ್ತು ಬಸ್ ಸಮಯದ ಮಾಹಿತಿಗಾಗಿ <a href="https://www.ksrtc.in" target="_blank" style="color: #1e3a8a; font-weight: bold;">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>`,
        timings: `ಮೀಸಲಾತಿ ಮತ್ತು ಸಾಮಾನ್ಯ ಬಸ್ ಸಮಯವನ್ನು ಪರಿಶೀಲಿಸಲು <a href="https://www.ksrtc.in/" target="_blank" style="color: #1e3a8a; font-weight: bold;">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>.`,
        notfound: "ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು FAQ ಆಯ್ಕೆಗಳನ್ನು ಬಳಸಿ ಅಥವಾ 080-26252625 ಗೆ ಕರೆ ಮಾಡಿ.",
        placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
        faq_title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು"
    }
};

let currentLang = 'en';

// Change Language UI and logic
function changeLanguage() {
    currentLang = langSwitch.value;
    document.getElementById('welcome-msg').innerHTML = responses[currentLang].welcome;
    document.getElementById('userInput').placeholder = responses[currentLang].placeholder;
    document.getElementById('faq-title').innerText = responses[currentLang].faq_title;
    document.getElementById('header-main').innerText = currentLang === 'kn' ? "ಅಭಿಮನ್ಯುಗೆ ಕೇಳಿ" : "Ask Abhimanyu";
    
    // Update FAQ buttons text
    const faqBtns = document.querySelectorAll('.faq-list button');
    const labels = {
        en: ["Can I cancel my ticket online?", "How to check the PNR status of the ticket?", "How KSRTC ticket can be booked?", "How to check refund status?"],
        kn: ["ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಟಿಕೆಟ್ ರದ್ದು ಮಾಡಬಹುದೇ?", "ಪಿಎನ್‌ಆರ್ ಸ್ಥಿತಿಯನ್ನು ನೋಡುವುದು ಹೇಗೆ?", "ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ?", "ಮರುಪಾವತಿ ಸ್ಥಿತಿ ನೋಡುವುದು ಹೇಗೆ?"]
    };
    faqBtns.forEach((btn, index) => { btn.innerText = labels[currentLang][index]; });
}

// Toggle Hamburger Menu
function toggleMenu() { 
    slideMenu.classList.toggle('active'); 
}

// Helper to add messages to UI
function addMessage(text, type) {
    const container = document.createElement('div');
    container.className = type === 'user' ? 'user-msg animate-in' : 'bot-msg-container animate-in';
    container.innerHTML = type === 'user' ? text : `<div class="bot-msg">${text}</div>`;
    chatDisplay.appendChild(container);
    chatDisplay.scrollTo({ top: chatDisplay.scrollHeight, behavior: 'smooth' });
}

// Handle FAQ or Quick Menu clicks
function handleQuickAction(key) {
    if(slideMenu.classList.contains('active')) toggleMenu();
    
    const actionLabels = {
        en: { cancel: "Can I cancel my ticket online?", pnr: "How to check PNR status?", booking: "How to book tickets?", refund: "How to check refund status?" },
        kn: { cancel: "ಟಿಕೆಟ್ ರದ್ದು ಮಾಡುವುದು ಹೇಗೆ?", pnr: "ಪಿಎನ್‌ಆರ್ ಸ್ಥಿತಿ ತಿಳಿಯುವುದು ಹೇಗೆ?", booking: "ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ?", refund: "ಮರುಪಾವತಿ ಸ್ಥಿತಿ ತಿಳಿಯುವುದು ಹೇಗೆ?" }
    };
    
    addMessage(actionLabels[currentLang][key], 'user');
    setTimeout(() => addMessage(responses[currentLang][key], 'bot'), 600);
}

// Process Text Input from User
function processInput() {
    const val = userInput.value.trim().toLowerCase();
    if (!val) return;

    addMessage(userInput.value, 'user');
    userInput.value = '';

    setTimeout(() => {
        let reply = responses[currentLang].notfound;
        
        // Keyword Detection
        if (val.includes("to") || val.includes("route") || val.includes("from") || val.includes("ಬಸ್ಸುಗಳು")) {
            reply = responses[currentLang].routing;
        } 
        else if (val.includes("timing") || val.includes("time") || val.includes("ಸಮಯ")) {
            reply = responses[currentLang].timings;
        }
        else if (val.includes("pnr") || val.includes("ಪಿಎನ್ಆರ್")) {
            reply = responses[currentLang].pnr;
        }
        else if (val.includes("cancel") || val.includes("ರದ್ದು")) {
            reply = responses[currentLang].cancel;
        }
        else if (val.includes("book") || val.includes("ಬುಕ್")) {
            reply = responses[currentLang].booking;
        }
        else if (val.includes("refund") || val.includes("ಮರುಪಾವತಿ")) {
            reply = responses[currentLang].refund;
        }

        addMessage(reply, 'bot');
    }, 700);
}

// Event Listener for Enter Key
userInput.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') processInput(); 
});