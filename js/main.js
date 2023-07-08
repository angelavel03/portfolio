function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const serviceId = 'service_kelewsr';
    const templateId = 'template_mphrjgs';

    emailjs.send(serviceId, templateId, params).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function validateForm() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        document.getElementById("nameError").textContent = "*Name is required!";
        return false;
    } else if(name.length < 3) {
        document.getElementById("nameError").textContent = "*Name should be at least 3 characters!";
        return false;
    }

    if(email === "") {
        document.getElementById("emailError").textContent = "*Email is required!";
        return false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "*Invalid email!";
        return false;
    }

    if(message === "") {
        document.getElementById("messageError").textContent = "*Message is required!";
        return false;
    }

    return true;
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Event Listeners
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
})

document.getElementById('mail-btn').addEventListener("click", () => {
    if(validateForm() === true) {
        sendMail();
    }
})