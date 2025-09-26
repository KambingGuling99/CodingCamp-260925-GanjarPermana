// Global script for the website

document.addEventListener("DOMContentLoaded", function () {
  // Check if on home page (has .welcome element)
  if (document.querySelector(".welcome")) {
    // Prompt for name and update welcome message
    let userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== "") {
      userName = userName.trim();
      const welcomeText = document.querySelector(".welcome h1");
      if (welcomeText) {
        welcomeText.innerHTML = `Hi ${userName}, Welcome to Revou Tech Website!`;
      }
    } else {
      // Default if no name
      const welcomeText = document.querySelector(".welcome h1");
      if (welcomeText) {
        welcomeText.innerHTML = "Hi Visitor, Welcome to Revou Tech Website!";
      }
    }
  }

  // Check if on contact page (has .contact-form)
  if (document.querySelector(".contact-form")) {
    const form = document.querySelector(".contact-form");
    const submitBtn = document.querySelector(".submit-btn");
    const resultDiv = document.getElementById("submit-result");

    // Form validation function
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Reset previous results
      resultDiv.className = "";
      resultDiv.style.display = "none";

      // Check required fields
      if (!name) {
        showError("Name is required.");
        return false;
      }
      if (!email) {
        showError("Email is required.");
        return false;
      }
      if (!subject) {
        showError("Subject is required.");
        return false;
      }
      if (!message) {
        showError("Message is required.");
        return false;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError("Please enter a valid email address.");
        return false;
      }

      return true;
    }

    // Show error message
    function showError(message) {
      resultDiv.textContent = message;
      resultDiv.className = "error";
      resultDiv.style.display = "block";
    }

    // Show success with values
    function showSuccess(values) {
      resultDiv.innerHTML = `
                <h3>Thank you for your message!</h3>
                <p><strong>Name:</strong> ${values.name}</p>
                <p><strong>Email:</strong> ${values.email}</p>
                <p><strong>Subject:</strong> ${values.subject}</p>
                <p><strong>Message:</strong> ${values.message}</p>
            `;
      resultDiv.className = "success";
      resultDiv.style.display = "block";

      // Clear form
      form.reset();
    }

    // Event listener for submit
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (validateForm()) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        showSuccess({
          name,
          email,
          subject,
          message,
        });
      }
    });
  }
});
