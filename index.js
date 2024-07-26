document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha();
});

function generateCaptcha() {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    const canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 150;
    canv.height = 30;
    const ctx = canv.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(captcha.join(""), 0, 30);
    document.getElementById("captcha-text").innerHTML = "";
    document.getElementById("captcha-text").appendChild(canv);
    document.getElementById("captcha-input").value = "";
    window.captcha = captcha.join("");
}

function validateCaptcha() {
    const userInput = document.getElementById("captcha-input").value;
    const message = document.getElementById("captcha-message");
    if (userInput === window.captcha) {
        message.style.color = "green";
        message.textContent = "CAPTCHA verified successfully!";
        return true;
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect CAPTCHA. Please try again.";
        generateCaptcha();
        return false;
    }
}
