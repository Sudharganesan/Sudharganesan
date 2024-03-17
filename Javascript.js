function vfun(){
      var uname=document.forms["myform"]["uname"].value;
      var upswd=document.forms["myform"]["upswd"].value;
      if(uname==null || uname=="" ){
            document.innerHTML ="enter the user name";
                 return false;
        }

        if(upswd==null || upswd==""){
                  document.innerHTML ="enter the password";
                 return false;
        }

        if (uname != '' && upswd != '' ){
         alert("Login successfully");
                         }

        
const loginpage = document.querySelector('#login-page');

loginpage.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('#uname').value;
  const password = document.querySelector('#upswd').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ uname, upswd })
  });

  const data = await response.json();

  if (response.ok) {
    console.log(data.message);
  } else {
    console.error(data.message);
  }
});
app.post('/login', (req, res) => {
  if (req.body.uname === 'example' && req.body.upswd === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});
$(document).ready(function() {
  $('#loginForm').submit(function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    
    $.ajax({
      url: 'your_backend_login_endpoint',
      method: 'POST',
      dataType: 'json',
      data: {
        username: username,
        password: password
      },
      success: function(response) {
        if (response.status === 'success') {
          showLoginInfo(response.message);
        } else {
          showError(response.message);
        }
      },
      error: function(xhr, status, error) {
        console.error('Error:', error);
      }
    });
  });
});
function showLoginInfo(message) {
  $('#loginStatus').html('<div class="alert alert-success" role="alert">' + message + '</div>');
}

function showError(message) {
  $('#loginStatus').html('<div class="alert alert-danger" role="alert">' + message + '</div>');
}      
}
function vfun1(){
            var uname=document.forms["myform2"]["uname"].value;
            var email=document.forms["myform2"]["email"].value;
            var upswd=document.forms["myform2"]["upswd"].value;
            var phoneno=document.forms["myform2"]["phoneno"].value;


        if(uname==null || uname=="" ){
                document.innerHTML ="enter the user name";
                 return false;
        }

        if(email==null || email==""){
                document.innerHTML ="enter the email";
                 return false;
        }

        if(upswd==null || upswd=="" ){
                document.innerHTML ="enter the password";
                 return false;
        }

        if(phoneno==null || phoneno==""){
                  document.innerHTML ="enter the phone number";
                 return false;}

        if (uname != '' && upswd != '' && phoneno != '' && email1 != '' )


          alert("Register successfull");
      
const Registerpage = document.querySelector('#Register-page');

Registerpage.addEventListener('submit', async (e) => {
  e.preventDefault();

  const uname = document.querySelector('#uname').value;
  const email = document.querySelector('#email').value;
  const upswd = document.querySelector('#upswd').value; 
  const phoneno = document.querySelector('#phoneno').value;
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ uname,email,upswd,phoneno })
  });

  const data = await response.json();
  if (response.ok) {
    console.log(data.message);
  } else {
    console.error(data.message);
  }
});
app.post('/login', (req, res) => {
  if (req.body.uname === 'example' && req.body.email === 'asexample@gmail.com' && req.body.upswd === 'password' && req.body.phoneno === '9566890100') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});
}                         

}
