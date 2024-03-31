// Get the form element
const contactForm = document.getElementById('contact-form');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form inputs
  const nameInput = contactForm.elements['name'];
  const emailInput = contactForm.elements['email'];
  const messageInput = contactForm.elements['message'];

  // Validate name
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Name is required');
    return;
  }

  // Validate email
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email address');
    return;
  }

  // Validate message
  if (!messageInput.value.trim()) {
    showError(messageInput, 'Message is required');
    return;
  }

  // If all inputs are valid, submit the form
  // Here you can add your code to submit the form to the server
  alert('Form submitted successfully!');
  contactForm.reset();
});

// Function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to show error message
function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.innerText = message;
  formControl.classList.add('error');
}

// Add event listener to remove error message on input change
contactForm.addEventListener('input', function(event) {
  const input = event.target;
  const formControl = input.parentElement;
  formControl.classList.remove('error');
});
