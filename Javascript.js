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
                         

          }
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (e) => {
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
