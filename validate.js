//Checking name is in UPPERCASE or not
function validateName () {
	var name = document.getElementById("name").value;
	if(name.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g))
	{
		return true;
	}
	else
	{
		alert("Please enter your name in uppercase only");
		return false;
	
	}
}

//Checking phone no.
function validatePhoneNo () {
	var phone = document.getElementById("phone").value;
	console.log(phone);
	if( phone.length!=10){
		alert("Phone no. not valid");
		return false;
	}
	else{
		
		return true;
	}
}

//Checking email is valid or not
function validateEmail(){
	var email = document.getElementById("email");
	var regex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
 	if (!regex.test(email)){
 		return true;
 	 }
 	else{
 		alert('Email Id is not valid');
 		return false;
 	}

}


//Checking length of password
function checkPasswordLength() {
	var pswd=document.getElementById("password").value;
	if(pswd.length<10)
	{
		alert("Password should be atleast 10 characters long");
		return false;
	}
	if(pswd.length>15)
	{
		alert("Password should not exceed 15 characters");
		return false;
	}
	return true;
}


/* To match the two passwords*/
 function matchPassword() {  
  var pw1 = document.getElementById("password").value;  
  var pw2 = document.getElementById("cnf-password").value;  
  if(pw1 != pw2)  
  {   
    alert("Passwords did not match");  
    return false;
  } 
  return true;
} 


/*On submitting the country, change time*/
function onSubmit(){
	var zone = document.getElementById("countryDropdown").value;
	var convertedDate= new Date().toLocaleString("en-US", {timeZone:zone,timeStyle:'medium'});
	console.log(convertedDate);
	document.getElementById("date-time").innerHTML = convertedDate;
	fillRows();
} 


var i=0;
/*To fill table*/
function fillRows(){
	let date=document.getElementById("date-time").value;
	let cnt=document.getElementById("countryDropdown").value;
	let nm=document.getElementById("name").value;
	let em=document.getElementById("email").value;

	function tabledata(serialNo,inputDate,country,name,email){
	this.serialNo=serialNo,
	this.inputDate=inputDate,
	this.country=country,
	this.name=name,
	this.email=email
	}
	i++;
	 var obj=new tabledata(i,date,cnt,nm,em);
	var k = '<tbody>'
    
        k+= '<tr>';
        k+= '<td>' + obj.serialNo + '</td>';
        k+= '<td>' + obj.inputDate + '</td>';
        k+= '<td>' + obj.country + '</td>';
        k+= '<td>' + obj.name + '</td>';
        k+= '<td>' + obj.email + '</td>'; 
        k+= '</tr>';
    
    k+='</tbody>';
    document.getElementById('tableValues').innerHTML = k;
}






