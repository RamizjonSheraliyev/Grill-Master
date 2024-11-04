document.addEventListener("DOMContentLoaded", function () {
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const submitBtn = document.getElementById('submitBtn');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  function validateForm() {
    let isValid = true;

    // Validate Last Name
    const lastNameValue = lastNameInput.value;
    if (!lastNameValue.endsWith('v') && !lastNameValue.endsWith('a')) {
      lastNameError.textContent = 'Last name must end with "v" or "a".';
      lastNameError.style.display = 'block';
      isValid = false;
    } else {
      lastNameError.style.display = 'none';
    }

    // Validate Email
    const emailValue = emailInput.value;
    if (!emailValue.endsWith('@gmail.com')) {
      emailError.textContent = 'Email must end with @gmail.com.';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Validate Password Match
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue) {
      passwordError.textContent = 'Passwords do not match.';
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    submitBtn.disabled = !isValid;
  }

  // Add event listeners
  lastNameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);
  confirmPasswordInput.addEventListener('input', validateForm);

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!submitBtn.disabled) {
      window.location.href = "";
    }
  });
});
