
function clearError(){
    var errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id,error){
element=document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validForm(){
    var returnval=true
    clearError()
  var name=document.forms['myform']['yourname'].value;
   if(name.length<5){
        seterror("name","*length of name is to short")
        returnval =false;
    }
    if(name.length==0){
        seterror("name","*name Can not be blank")
        returnval =false;
    }

    var email=document.forms['myform']['youremail'].value;
    if(email.length>20){
        seterror("email","*length of Email is to long")
        returnval =false;
      }
      var message=document.forms['myform']['yourmessage'].value;
      if(message.length>20){
        seterror("message","*You message is to short")
        returnval =false;
      }
      if(returnval==true){
        window.alert("Thanks your message is submitted ") 
      }
      
      return returnval;
       
      }

   

  

