document.getElementById('refresh-captcha').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('captcha-image').src = 'captcha.php?' + new Date().getTime();
  });
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').value;
  
    // Validate the captcha here
    if (captcha.toLowerCase() === captchaValue.toLowerCase()) {
      // Submit the form here
      console.log('Form submitted with:', username, password);
    } else {
      alert('Invalid captcha');
    }
  });