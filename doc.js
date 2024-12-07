document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const refuseButton = document.getElementById("weigeren-cookies");

    // Controleer of cookies al zijn geaccepteerd
    //if (localStorage.removeItem("cookiesAccepted") === "true") {
    // deze gaan we gebruiken voor als je die cookies melding terug wilt na weghalen
    if (localStorage.removeItem("cookiesAccepted") === "true") {
        console.log("Cookies zijn al geaccepteerd.");
        cookieBanner.style.display = "none";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        console.log("Cookies zijn geaccepteerd.");
        cookieBanner.style.display = "none";
    });

    refuseButton.addEventListener("click", function () {
        console.log("Cookies zijn geweigerd.");
        cookieBanner.style.display = "none";
    });
});

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    // Verander de knoptekst afhankelijk van de modus
    let button = document.querySelector("button[onclick='myFunction()']");
    if (element.classList.contains("dark-mode")) {
        button.textContent = "Light";
        console.log("Dark mode ingeschakeld");
    } else {
        button.textContent = "Dark";
        console.log("Light mode ingeschakeld");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function setGreeting() {
        const greetingElement = document.getElementById("greeting");
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour >= 6 && currentHour < 12) {
            greeting = "Goedemorgen!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Goedemiddag!";
        } else if (currentHour >= 18 && currentHour < 24) {
            greeting = "Goedenavond!";
        } else {
            greeting = "Goedenacht!";
        }

        greetingElement.textContent = greeting;
    }

    setGreeting();
});


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function hopla() {
    document.getElementById("myDropdown").classList.toggle("show");
}

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
}
}
}
}
