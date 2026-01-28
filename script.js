document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email) {
      // UI Transition
      form.style.opacity = "0"; // Fade out form
      setTimeout(() => {
        form.style.display = "none";
        messageDiv.classList.remove("hidden"); // Show message
      }, 300);

      console.log(`Email captured: ${email}`);
    }
  });
});
