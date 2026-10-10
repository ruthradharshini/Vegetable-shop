// ==============================
// SELLER LOGIN JAVASCRIPT
// ==============================


// Show / Hide Password

function toggleSellerPassword() {

    const passwordInput =
        document.getElementById("sellerPassword");

    const button =
        document.getElementById("showPasswordBtn");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        button.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        button.textContent = "Show";
    }
}


// Seller Login

document
    .getElementById("sellerLoginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("sellerEmail").value.trim();

        const password =
            document.getElementById("sellerPassword").value.trim();

        const message =
            document.getElementById("sellerMessage");


        if (email === "" || password === "") {

            message.textContent =
                "Please enter your email and password.";

            message.style.color = "#b44747";

            return;
        }


        // Frontend demo login only

        message.textContent =
            "Seller demo login successful!";

        message.style.color = "#2f7042";


        // Dashboard will be connected later

        setTimeout(function() {

            window.location.href =
                "seller-dashboard.html";

        }, 1000);

    });


// Forgot Password

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Password recovery will be connected to the backend later."
    );
}