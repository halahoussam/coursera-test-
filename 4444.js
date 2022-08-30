/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
//alert("the tow names must match");
//return false;
function nicknamefunction(){
	if(document.getElementById('yesNick').checked){
		document.getElementById('Zip code').style.display="inline";
		document.getElementById('name').setAttribute('required',true);
	}
else{
	document.getElementById('name').removeAttribute('required');
	document.getElementById('Zip code').style.display="none";
}
}