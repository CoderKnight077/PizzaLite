   // script3.js
   document.addEventListener("DOMContentLoaded", function() {
    // Get the PDF button element
    var pdfButton = document.getElementById("pdf");
    if (pdfButton) {
        // Add event listener to the button
        pdfButton.addEventListener("click", function() {
            // Toggle the 'animate' class to start or stop the animation
            pdfButton.classList.toggle("animate");
        });
    }

    // Get the toggler element
    var toggler = document.getElementById("toggler");
    var navLinks = document.getElementById("nav-Links");

    if (toggler && navLinks) {
        // Add event listener to the toggler
        toggler.addEventListener("click", function() {
            // Toggle the 'active' class on the navigation links
            navLinks.classList.toggle("active");
        });
    }
});

  