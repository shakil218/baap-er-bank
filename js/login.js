document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  
  if ( email === 'rabiulhasanshakil218@gmail.com' && password === 'miredmi5shakil'){
    window.location.href = 'bank.html'
  }

  else {
    alert('invalid user Email or Password');
  }

  passwordField.value = '';
});