function validateForm() {
	var x = document.forms["regForm"]["password"].value;
	var y = document.forms["regForm"]["password2"].value;
	if (x == y && x.length>=8) {
		return true;
	}
	else{
		if(x != y){
			alert("Password doesn't match.");
			return false;
		}
		else{
			alert("Password length should be atleast 8 characters");
			return false;
		}
	}
}