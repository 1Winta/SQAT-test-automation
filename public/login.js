document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "user" && password === "pass") {
                localStorage.setItem('loggedIn', 'true');
                window.location.replace('dashboard.html');
            } else {
                document.getElementById('message').innerText = 'Invalid credentials!';
            }
        });
    }
}); 