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
