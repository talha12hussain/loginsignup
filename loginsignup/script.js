// Toggle between Login and Signup forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Password visibility toggle
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const loginPassword = document.getElementById('loginPassword');

const toggleSignupPassword = document.getElementById('toggleSignupPassword');
const signupPassword = document.getElementById('signupPassword');

toggleLoginPassword.addEventListener('click', () => {
  const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPassword.setAttribute('type', type);
  toggleLoginPassword.classList.toggle('fa-eye-slash');
});

toggleSignupPassword.addEventListener('click', () => {
  const type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  signupPassword.setAttribute('type', type);
  toggleSignupPassword.classList.toggle('fa-eye-slash');
});

// Basic form validation
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  if (!email || !password) {
    alert('Please fill in all fields.');
  } else {
    alert('Login successful!');
    // Add your login logic here
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signupUsername.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!username || !email || !password) {
    alert('Please fill in all fields.');
  } else {
    alert('Signup successful!');
    // Add your signup logic here
  }
});