var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let typed = new Typed(".text", {
  strings: ["Web Developer", "Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  _loop: true,
});

//sidebar
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
///Form submit
function submitForm(form) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to Formspree
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // Check if the form was submitted successfully
      if (response.ok) {
        // Clear the form fields
        form.reset();

        // Display a success message
        alert("Form submitted successfully!");
      } else {
        // Display an error message
        alert("Error submitting form.");
      }
    })
    .catch((error) => {
      alert("Error submitting form.");
    });
  return false;
}
