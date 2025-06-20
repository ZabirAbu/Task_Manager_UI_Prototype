document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the values of the form fields
    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const email = form.elements["email"].value;
    const currentPassword = form.elements["current-password"].value;
    const newPassword = form.elements["new-password"].value;
    const confirmPassword = form.elements["confirm-password"].value;

    // Check if at least one field is filled in
    if (
      !firstName &&
      !lastName &&
      !email &&
      !currentPassword &&
      !newPassword &&
      !confirmPassword
    ) {
      alert("Please fill in at least one field before submitting the form.");
      return;
    }

    if (currentPassword && currentPassword.length < 8) {
      alert("Current password should be at least 8 characters long.");
      return;
    }

    if (currentPassword && (!newPassword || !confirmPassword)) {
      alert(
        "Please fill in both the new password and confirm password fields when changing your password."
      );
      return;
    }
    if (currentPassword && currentPassword.length < 8) {
      alert("Current password should be at least 8 characters long.");
      return;
    }

    // Check if new password and confirm password fields match
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password fields do not match.");
      return;
    }

    // Check if current password field is filled in if the user is trying to change their password
    if (newPassword && !currentPassword) {
      alert(
        "Please fill in the current password field before changing your password."
      );
      return;
    }

    // Construct a message with the form field values
    let message = "You have submitted the following changes:\n\n";
    if (firstName) {
      message += `First Name: ${firstName}\n`;
    }
    if (lastName) {
      message += `Last Name: ${lastName}\n`;
    }
    if (email) {
      message += `Email: ${email}\n`;
    }
    if (newPassword) {
      message += `New Password: ${newPassword}\n`;
    }

    alert(message);
    // Redirect to dashboard page
    window.location = "../webPages/dashboard.html";
  });
});
