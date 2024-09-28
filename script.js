
    // Smooth scrolling for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start' // Scroll to the top of the target element
            });
        });
    });
// Function to show project details
function showProjectDetails(projectName, description) {
    alert(`Project: ${projectName}\nDescription: ${description}`);
}

document.querySelector('.btn').addEventListener('click', function() {
    const profileSection = document.getElementById('profile');

    if (profileSection.classList.contains('hidden')) {
        profileSection.classList.remove('hidden');
        profileSection.classList.add('visible');
        
        // Trigger reflow to enable the transition
        void profileSection.offsetWidth; // This line forces a reflow
        
        profileSection.classList.add('fade-in');
    }
});



