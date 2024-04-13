// JavaScript to show and hide the popup
document.getElementById("sendMessageButton").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting (you can remove this line if needed)
    document.getElementById("messagePopup").style.display = "block";
});

document.getElementById("closeMessagePopup").addEventListener("click", function () {
    document.getElementById("messagePopup").style.display = "none";
});
