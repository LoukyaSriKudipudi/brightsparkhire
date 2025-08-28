const contactForm = document.querySelector("#contactForm");
const message = document.querySelector("#message");



contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Create FormData directly from the form
  const formData = new FormData(contactForm);

  try {
    const res = await fetch("/contactForm", {
      method: "POST",
      body: formData, // send FormData directly
    });

    const data = await res.json();

    if (res.ok) {
      message.style.display = "block";
      message.style.color = "#40c057";
      message.textContent = data.message;
      contactForm.reset(); // clear form on success
    } else {
      message.style.display = "block";
      message.style.color = "##e8590c";
      message.textContent = "Error: " + data.message;
    }
  } catch (err) {
    message.textContent = "Error: " + err.message;
  }
});
