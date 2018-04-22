/* Javascript Validations */

// Validation for empty feilds
function validate()
      {
         if( document.contactForm.fname.value == "" )
         {
            
            document.contactForm.fname.focus() ;
			$( "<p class='error-msg'>Please provide your first name!</p>" ).insertAfter( "input[name='fname'");
            return false;
         } else {
			 $("input[name='fname']").next('.error-msg').hide();
		 }
		 if( document.contactForm.lname.value == "" )
         {
           $( "<p class='error-msg'>Please provide your last name!</p>" ).insertAfter( "input[name='lname'");
            document.contactForm.lname.focus() ;
            return false;
		 }else {
			$("input[name='lname']").next('.error-msg').hide();
		 }
		 if( document.contactForm.email.value == "" )
         {
			$( "<p class='error-msg'>Please provide your email!</p>" ).insertAfter( "input[name='email'");
            document.contactForm.email.focus();	
            return false;
         } else {
			 var validMail = validateEmail();
			 return validMail;
		 }
         if( document.contactForm.phone.value == "" )
         {
           $( "<p class='error-msg'>Please provide your mobile number!</p>" ).insertAfter( "input[name='phone'");
            document.contactForm.phone.focus();	
            return false;
         } else {
			 return validatePhoneNumber();
			// return validPhone;
			 
		 }
         
		   
         return( true );
      }

// Validation for Ten digit phone number
function validatePhoneNumber()
{
  var phonenoFormat = /^\d{10}$/;
  var phoneNumber = document.contactForm.phone.value;
  if(phoneNumber.match(phonenoFormat))
  {$("input[name='phone']").next('.error-msg').hide();
      return true;
  }
  else
  {
    $( "<p class='error-msg'>Not a valid mobile number!</p>" ).insertAfter( "input[name='phone'");
     return false;
  }
 }
  
// Validation for email address	format  
function validateEmail()
      {
         var emailID = document.contactForm.email.value;
         atposition = emailID.indexOf("@");
         dotposition = emailID.lastIndexOf(".");
         
         if (atposition < 1 || ( dotposition - atposition < 2 )) 
         {
           $( "<p class='error-msg'>Not a valid mail id!</p>" ).insertAfter( "input[name='email'");
            document.contactForm.email.focus() ;
            return false;
         }
		 $("input[name='email']").next('.error-msg').hide();
         return( true );
      }