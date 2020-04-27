const form = document.getElementById('myForm');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

    if(firstname === ""){
      document.getElementById('error_one').style.opacity = "1";
      document.getElementById('img1').style.opacity = "1";
      document.getElementById("firstname").style.borderColor = "hsl(0, 100%, 74%)";
    }
    else{
      document.getElementById('error_one').style.opacity = "0";
      document.getElementById('img1').style.opacity = "0";
      document.getElementById("firstname").style.borderColor = "hsl(246, 25%, 77%)";
    }

    if(lastname === ""){
      document.getElementById('error_two').style.opacity = "1";
      document.getElementById('img2').style.opacity = "1";
      document.getElementById("lastname").style.borderColor = "hsl(0, 100%, 74%)";
    }
    else{
      document.getElementById('error_two').style.opacity = "0";
      document.getElementById('img2').style.opacity = "0";
      document.getElementById("lastname").style.borderColor = "hsl(246, 25%, 77%)";
    }
    
    if(email === ""){
      document.getElementById('error_three').style.opacity = "1";
      document.getElementById('img3').style.opacity = "1";
      document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
    }
    else{
      document.getElementById('error_three').style.opacity = "0";
      document.getElementById('img3').style.opacity = "0";
      document.getElementById("email").style.borderColor = "hsl(246, 25%, 77%)";
    }

    if(password === ""){
      document.getElementById('error_four').style.opacity = "1";
      document.getElementById('img4').style.opacity = "1";
      document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
    }
    else{
      document.getElementById('error_four').style.opacity = "0";
      document.getElementById('img4').style.opacity = "0";
      document.getElementById("password").style.borderColor = "hsl(246, 25%, 77%)";
    }
    

});
