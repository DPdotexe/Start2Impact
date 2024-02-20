const form = document.getElementById('contact-form');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
});

function sendMail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email_id").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
        from_name: fullName,
        email_id: userEmail,
        message: userMessage
    };

    emailjs.send('service_p1sl1w6', 'template_886zqlh', contactParams, 'aZWFhGfDKVOa4iy5q')
        .then(function(res) {
            console.log("Mail sent successfully:", res);
        })
        .catch(function(error) {
            console.error("Error sending mail:", error);
        });
}

// Script for typing animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Junior Full Stack Developer", "Junior Front-End Developer", "Junior Back-End Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Script for emailjs initialization and form submission
(function() {
    emailjs.init('aZWFhGfDKVOa4iy5q');
})();

window.onload = function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm("service_p1sl1w6", "template_886zqlh", 'aZWFhGfDKVOa4iy5q', this)
            .then(
                function() {
                    console.log("SUCCESS!");
                },
                function(error) {
                    console.log("FAILED...", error);
                }
            );
    });
};
