const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Tab switching logic (your original code, slightly cleaned)
loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    // Ensure forms are displayed/hidden correctly if using 'display' instead of just 'active' class for visibility
    loginForm.style.display = "block"; // Or "flex" depending on your CSS
    registerForm.style.display = "none";
});

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
    // Ensure forms are displayed/hidden correctly
    registerForm.style.display = "block"; // Or "flex"
    loginForm.style.display = "none";
});


// --- Login Form Submission Handling ---
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // --- START: SIMULATED BACKEND LOGIC (For demonstration only!) ---
    // In a real application, you would send this data to your server
    // via fetch() or XMLHttpRequest, and the server would handle authentication.

    if (email === "admin@gmail.com" && password === "password123") {
        alert("Login successful! Redirecting...");
        // Redirect to the home page
        window.location.href = "home.html"; // Make sure 'home.html' is in the same directory
    } else {
        alert("Login failed. Invalid email or password.");
        // Optionally, clear password field or show error message on the form
        document.getElementById("loginPassword").value = "";
    }
    // --- END: SIMULATED BACKEND LOGIC ---
});


// --- Register Form Submission Handling ---
registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const fullName = document.getElementById("registerFullName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop the function if passwords don't match
    }

    // --- START: SIMULATED BACKEND LOGIC (For demonstration only!) ---
    // In a real application, you would send this data to your server
    // for user creation.
    console.log("Registering:", { fullName, email, password }); // Log the data
    alert("Registration successful! Please log in.");

    // After successful registration, automatically switch to the login tab
    loginTab.click(); // Programmatically click the login tab to show the login form

    // Optionally, pre-fill the login email with the just-registered email
    document.getElementById("loginEmail").value = email;
    // --- END: SIMULATED BACKEND LOGIC ---
});

