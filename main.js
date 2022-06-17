const form = document.getElementById('contact-form')
addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});
function sendMail() {
   let fullName = document.getElementById("name").value;
   let userEmail = document.getElementById("email_id").value;
   let userMessage = document.getElementById("message").value; 

       var contactParams = {
           from_name: fullName,
           email_id: userEmail,
           message: userMessage
       }
       emailjs.send('service_p1sl1w6', 'template_886zqlh', contactParams,'aZWFhGfDKVOa4iy5q').then(function (res) {})
}