document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const navMenu = document.getElementById("navMenu");
    navMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();

            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navMenu.offsetHeight,
                behavior: "smooth"
            });
        }
    });

    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add your form submission logic here
        // For example, you can use AJAX to send the form data to a server
        console.log("Form submitted!");
    });
});