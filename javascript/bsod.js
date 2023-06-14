var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://youtu.be/dQw4w9WgXcQ",
	width: 110,
	height: 110,
	colorDark : "#010081",
	colorLight : "#ffffff", 
	correctLevel : QRCode.CorrectLevel.H
});