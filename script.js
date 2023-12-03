window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});


//form

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Successfully sent! We will get in touch';
  successMessage.style.color = 'green';
  form.appendChild(successMessage);

  // Submit the form using AJAX
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('Form submitted successfully');

      // Clear input fields after successful submission
      form.querySelectorAll('input.field, textarea.field').forEach((input) => {
        input.value = '';
      });
    } else {
      console.error('Error submitting form:', xhr.statusText);
    }
  };
  xhr.send(formData);
});


