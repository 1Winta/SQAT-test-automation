document.addEventListener('DOMContentLoaded', function () {
    // Only run this check on pages other than index.html
    if (!window.location.pathname.includes('index.html')) {
        if (!localStorage.getItem('loggedIn')) {
            window.location.replace('index.html');
            return;
        }
    }
});

// Make showPage function globally accessible
window.showPage = function(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    // Show the selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
};

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.replace('index.html');
}