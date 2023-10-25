// for about
document.addEventListener("DOMContentLoaded", function() {
    const elementToClick = document.querySelector(".frame1-text14");
    const targetElement = document.querySelector(".frame1-aboutpage");

    elementToClick.addEventListener("click", function() {
        targetElement.scrollIntoView({ behavior:"smooth" });
    });
});
// for services
document.addEventListener("DOMContentLoaded", function() {
    const elementToClick = document.querySelector(".frame1-text16");
    const targetElement = document.querySelector(".frame1-servicespage");

    elementToClick.addEventListener("click", function() {
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});
    var learnMoreElement = document.querySelector(".frame1-frame6");
    learnMoreElement.addEventListener("click", function() {
    window.location.href = "testing.html";
});
    var learnMoreElement = document.querySelector(".frame1-frame7");
    learnMoreElement.addEventListener("click", function() {
    window.location.href = "learning.html";
});

    var learnMoreElement = document.querySelector(".frame1-text18");
    learnMoreElement.addEventListener("click", function() {
    window.location.href = "login.html";
});
