const usernameInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const signinBtn = document.getElementById("mainsignin");

if (signinBtn) {
    signinBtn.onclick = function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(
            user => user.username === username && user.password === password
        );

        if (validUser) {
            alert(`Welcome back, ${validUser.firstname} ${validUser.lastname}!`);

            localStorage.setItem("loggedInUser", JSON.stringify(validUser));

            window.location.href = "aboutunfinish.html";
        } else {
            alert("Invalid username or password.");
        }
    };
};

