import { useState } from "react";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Show "Sending..." when form is submitted

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        // Reset form, show success message, etc.
        setErrorMessage(""); // Clear error message
      } else {
        setErrorMessage(result.message); // Show error message if something went wrong
      }
    } catch (error) {
      setErrorMessage("Something went wrong, please try again.");
    } finally {
      setIsSending(false); // Reset button state after form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <input name="firstName" type="text" placeholder="First Name" required />
      <input name="lastName" type="text" placeholder="Last Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" type="text" placeholder="Phone" />
      <textarea name="message" placeholder="Message" required></textarea>

      {/* Error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Submit button */}
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
