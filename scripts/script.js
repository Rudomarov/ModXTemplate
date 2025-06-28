scrollUpButton = document.getElementById("scroll-up-container");
scrollAboutButton = document.getElementById("about-button");
scrollFeaturesButton = document.getElementById("features-button");4
scrollMainButton = document.getElementById("logo-container");
buyButton = document.getElementById("buy-button");
closeBuyModalButton = document.getElementById("close-buy-modal");
buyModalButton = document.getElementById("buy-mod-modal-button");

buyModalBackground = document.getElementById("buy-modal-background");

aboutSection = document.getElementById("about");
featuresSection = document.getElementById("features");

function initializeListeners() {
    scrollUpButton.addEventListener("click", scrollUp);
    scrollAboutButton.addEventListener("click", scrollToAbout);
    scrollFeaturesButton.addEventListener("click", scrollToFeatures);
    scrollMainButton.addEventListener("click", scrollUp);
    buyButton.addEventListener("click", openBuyModal);
    closeBuyModalButton.addEventListener("click", closeBuyModal);
    buyModalButton.addEventListener("click", buyMod);
}

function scrollUp() {
    window.scrollTo({
       top: 0,
        behavior: "smooth"
    });
}

function scrollToAbout() {
    window.scrollTo({
       top: aboutSection.offsetTop,
        behavior: "smooth"
    });
}

function scrollToFeatures() {
    window.scrollTo({
        top: featuresSection.offsetTop,
        behavior: "smooth"
    });
}

function openBuyModal() {
    buyModalBackground.style.opacity = "1";
    buyModalBackground.style.zIndex = "1000";
    buyModalBackground.style.pointerEvents = "auto";
}

function closeBuyModal() {
    buyModalBackground.style.opacity = "0";
    buyModalBackground.style.zIndex = "0";
    buyModalBackground.style.pointerEvents = "none";
}

function buyMod() {
    window.open("https://t.me/yourusername", "_blank");
}

AOS.init();
initializeListeners();