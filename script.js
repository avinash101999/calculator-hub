document.addEventListener("DOMContentLoaded", function() {
    // Function to load the content of the selected calculator section
    function loadCalculatorSection(sectionId) {
        // Hide all sections
        let sections = document.querySelectorAll('main section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the selected section
        let selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Add click event listeners to category links
    let categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            loadCalculatorSection(targetId);
        });
    });

    // Add click event listeners to calculator links
    let calculatorLinks = document.querySelectorAll('section ul li a');
    calculatorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('This will open the ' + this.textContent + ' in a new page.');
        });
    });

    // Default view: load the homepage section
    loadCalculatorSection('home');
});
