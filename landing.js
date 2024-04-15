

// DEFINE BASE URL FOR API REQUESTS

const baseUrl = "https://db-weekendy.onrender.com/events/"


// Get references to the button and the popup
const buttons = document.querySelectorAll('.button');
const popup = document.querySelector('.popup');

// Function to open the popup
function openPopup() {
  popup.classList.add('open-popup');
}

// Function to close the popup
function closePopup() {
  popup.classList.remove('open-popup');
}

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', openPopup);
});

// Add click event listener to close button in popup
document.getElementById('close').addEventListener('click', closePopup);


const confirmPayment = document.getElementById("confirm");

function generateQr() {
    // Get the text content of the card-title element
    let qrText = document.querySelector(".card-title").textContent;

    // Generate the QR code URL with the text content
    let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;

    // Open the generated QR code URL in a new tab
    window.open(qrCodeUrl);
}

// Function to switch tabs
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

// Add click event listener to the confirm payment button
confirmPayment.addEventListener("click", function() {
    navigateToPage("http://127.0.0.1:3002/qrCode-page/qrCode.html");
});
