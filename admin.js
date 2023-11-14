function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Replace these with your actual admin credentials
    const correctUsername = 'admin';
    const correctPassword = 'admin123';
  
    if (username === correctUsername && password === correctPassword) {
      // Authentication successful, redirect to the admin page
      window.location.href = 'categories.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  