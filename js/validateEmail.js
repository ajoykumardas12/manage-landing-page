function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    // alert("Valid email address!");
    // document.form1.text1.focus();
    // return true;
    document.getElementById('invalidEmail').classList.add('hidden');
    document.getElementById('emailInput').classList.remove('invalid-border');
    document.getElementById('validEmail').classList.remove('hidden');
  } else {
    // alert("You have entered an invalid email address!");
    // document.form1.text1.focus();
    // return false;
    document.getElementById('validEmail').classList.add('hidden');
    document.getElementById('invalidEmail').classList.remove('hidden');
    document.getElementById('emailInput').classList.add('invalid-border');
  }
}
