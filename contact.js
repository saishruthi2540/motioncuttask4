document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add your logic here to handle form submission, such as sending data to a server.
    
    // For now, let's just show an alert with a confirmation message.
    alert('Thank you for your message! We will get back to you shortly.!');

    // Optionally, you can reset the form after submission.
    // event.target.reset();
});
function goBack() {
    // You can customize this URL to match the path of your home page
    window.location.href = 'home.html';
}