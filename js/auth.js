// LaptopZone - Authentication System

// User Authentication Functions
function getCurrentUser() {
    const user = localStorage.getItem('laptopzone_user');
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    localStorage.setItem('laptopzone_user', JSON.stringify(user));
    updateAuthUI();
}

function logout() {
    localStorage.removeItem('laptopzone_user');
    updateAuthUI();
    window.location.href = 'login.html';
}

function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

// Get all users from localStorage
function getAllUsers() {
    const users = localStorage.getItem('laptopzone_users');
    return users ? JSON.parse(users) : [];
}

// Save users to localStorage
function saveAllUsers(users) {
    localStorage.setItem('laptopzone_users', JSON.stringify(users));
}

// Register new user
function registerUser(name, email, password) {
    const users = getAllUsers();
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Šis el. paštas jau naudojamas' };
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: hashPassword(password),
        registeredDate: new Date().toLocaleString('lt-LT')
    };

    users.push(newUser);
    saveAllUsers(users);
    
    return { success: true, message: 'Registracija sėkminga!' };
}

// Login user
function loginUser(email, password) {
    const users = getAllUsers();
    const user = users.find(u => u.email === email && u.password === hashPassword(password));

    if (user) {
        const loggedInUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            registeredDate: user.registeredDate
        };
        setCurrentUser(loggedInUser);
        return { success: true, message: 'Sėkmingai prisijungta!' };
    }

    return { success: false, message: 'Neteisingas el. paštas arba slaptažodis' };
}

// Simple password hashing (in production, use proper hashing)
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
}

// Update UI based on authentication status
function updateAuthUI() {
    const user = getCurrentUser();
    const navAuth = document.getElementById('nav-auth');
    const navLogout = document.getElementById('nav-logout');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const userProfile = document.getElementById('user-profile');

    if (navAuth) {
        if (user) {
            navAuth.style.display = 'none';
            navAuth.textContent = 'Prisijungti';
        } else {
            navAuth.style.display = 'block';
            navAuth.textContent = 'Prisijungti';
        }
    }

    if (navLogout) {
        if (user) {
            navLogout.style.display = 'block';
            navLogout.textContent = user.name ? `${user.name}` : 'Atsijungti';
        } else {
            navLogout.style.display = 'none';
        }
    }

    // Update on login page
    if (loginFormContainer && registerFormContainer && userProfile) {
        if (user) {
            loginFormContainer.style.display = 'none';
            registerFormContainer.style.display = 'none';
            userProfile.style.display = 'block';

            document.getElementById('profile-name').textContent = user.name;
            document.getElementById('profile-email').textContent = user.email;
            document.getElementById('profile-date').textContent = user.registeredDate;
        } else {
            loginFormContainer.style.display = 'block';
            registerFormContainer.style.display = 'none';
            userProfile.style.display = 'none';
        }
    }
}

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();

    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const result = loginUser(email, password);

            if (result.success) {
                alert(result.message);
                window.location.href = 'index.html';
            } else {
                alert(result.message);
            }
        });
    }

    // Register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;

            // Validate passwords
            if (password !== confirmPassword) {
                alert('Slaptažodžiai nesutampa!');
                return;
            }

            if (password.length < 4) {
                alert('Slaptažodis turi būti bent 4 simboliai!');
                return;
            }

            const result = registerUser(name, email, password);

            if (result.success) {
                alert(result.message);
                toggleForms();
            } else {
                alert(result.message);
            }
        });
    }

    // Toggle forms
    const toggleRegister = document.getElementById('toggle-register');
    if (toggleRegister) {
        toggleRegister.addEventListener('click', function(e) {
            e.preventDefault();
            toggleForms();
        });
    }

    const toggleLogin = document.getElementById('toggle-login');
    if (toggleLogin) {
        toggleLogin.addEventListener('click', function(e) {
            e.preventDefault();
            toggleForms();
        });
    }

    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Ar tikrai norite atsijungti?')) {
                logout();
            }
        });
    }

    // Logout from nav
    const navLogout = document.getElementById('nav-logout');
    if (navLogout) {
        navLogout.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Ar tikrai norite atsijungti?')) {
                logout();
            }
        });
    }
});

function toggleForms() {
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');

    if (loginForm && registerForm) {
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    }
}