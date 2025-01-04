const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordconfirm");
const createAccountBtn = document.querySelector(".createBtn");
const signuplogin = document.getElementById("signuplogin");

signuplogin.onclick = function(){
    window.location.href = "main.html";
}

if (createAccountBtn) {
    createAccountBtn.onclick = function () {
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const passwordConfirm = passwordConfirmInput.value;

        if (!firstname || !lastname || !username || !password || !passwordConfirm) {
            alert("All fields are required.");
            return;
        }

        if (password !== passwordConfirm) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("Username already exists.");
            return;
        }

        users.push({
            firstname,
            lastname,
            username,
            password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");

        firstnameInput.value = "";
        lastnameInput.value = "";
        usernameInput.value = "";
        passwordInput.value = "";
        passwordConfirmInput.value = "";

        window.location.href = "main.html";
    };
}

