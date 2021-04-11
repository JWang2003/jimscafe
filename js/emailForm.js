let form = document.getElementById("email-forms");
form.addEventListener("submit", handleSubmit);
    
async function handleSubmit(event) {
  event.preventDefault(); //Prevents new page from popping up on form submit
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset()
    alert("Feedback sent! Thank you for your input!");
  }).catch(error => {
    alert("Oops! There was a problem submitting your form");
  });
}
