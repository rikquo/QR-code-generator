let img = document.getElementById("img");
let qrimg = document.getElementById("qrimg");
let qrtxt = document.getElementById("qrtxt");
function generateQR(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
    img.classList.add("show-img");
}