const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const copy=document.getElementById("triggerCoppy");

function generatePassword() {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }


  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  
  document.getElementById("generateButton").id="generateButton2"
  document.getElementById("triggerCoppy").className="coppyButton2"

}
function copyPassword(){
  passwordOutput.select();
  document.execCommand("copy");
  document.getElementById("generateButton2").id="generateButton"
  document.getElementById("triggerCoppy").className="coppyButton"
 
}

function getvalue(){
  document.getElementById('display-password-length').value=rangeValue.value
}
generateButton.addEventListener("click",generatePassword);
copy.addEventListener("click",copyPassword)
rangeValue.addEventListener("input", getvalue)
