const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if(firstName == ""){
    addError('firstname', 'FirstName cannot be empty');
  }else{
    removeError('firstname', " ");
  }
  
  if(lastName == ""){
    addError('lastname', 'LastName cannot be empty');
  }else{
    removeError('lastname', "");
  }

  if(email == ""){
    addError('email', 'Looks like this is not an email');
  }else{
    removeError('email', "");
  }
  if(password == ""){
    addError('password', 'Password cannot be empty');
  }else{
    removeError('password', "");
  }

});

function addError(field, message) {
  const details = form[field].parentNode;
  details.classList.add('error');

  const small = details.querySelector('small');
  small.innerText = message;
}

function removeError(field, message) {
  const details = form[field].parentNode;
  details.classList.remove('error');

  const small = details.querySelector('small');
  small.innerText = message;
}