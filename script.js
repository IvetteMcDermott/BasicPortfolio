emailjs.init("oud0Xk2e4Sn8T01km");

// Function to send email
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const form = document.getElementById("emailForm");
  //   const formData = new FormData(form);

  // Send email using EmailJS
  emailjs.sendForm("service_k7qd0ho", "template_p6gcu4d", form).then(
    function (response) {
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
      form.reset(); // Reset form
    },
    function (error) {
      console.error("Email send failed:", error);
      alert("Email send failed. Please try again later.");
    }
  );
}
