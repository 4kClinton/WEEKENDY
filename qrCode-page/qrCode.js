
// 3rd
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let notification = document.getElementById("notification");
let notificationQrImage = document.getElementById("notificationQrImage");

function generateQr() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        notificationQrImage.src = qrImage.src; // Set QR code image source for notification
        notification.style.display = "block"; // Show notification
    }
}

function saveQrImage() {
    let canvas = document.createElement('canvas');
    canvas.width = qrImage.width;
    canvas.height = qrImage.height;
    let context = canvas.getContext('2d');
    context.drawImage(qrImage, 0, 0, qrImage.width, qrImage.height);
    let link = document.createElement('a');
    link.download = 'qr_code.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    notification.style.display = "none"; // Hide notification after saving
}
