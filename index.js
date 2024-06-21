const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1El = document.querySelector("#password1_el");
let password2El = document.querySelector("#password2_el");
let paraEl = document.querySelector("#para-el")
let yesEl = document.querySelector("#yes");
let noEl = document.querySelector("#no");
let n = 91;
function generatePassword() {
    password1El.textContent = "";
    password2El.textContent = "";
    for(let i = 0; i <= 15; i++)
        {
            password1El.textContent += characters[Math.floor(Math.random()*n)];
            password2El.textContent += characters[Math.floor(Math.random()*n)];
        }
}
function yes()
{
    n = 62;
    yesEl.style.backgroundColor = '#1ECE1B';
    noEl.style.backgroundColor = '#10B981';
    paraEl.textContent = "Special Characters are Excluded !";
}
function no()
{
    n = 91;
    noEl.style.backgroundColor = '#1ECE1B';
    yesEl.style.backgroundColor = '#10B981';
    paraEl.textContent = "";
}
function copyToClipboardLegacy(text) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = text;
  
    // Append the input to the document (it doesn't need to be visible)
    document.body.appendChild(tempInput);
  
    // Select the text inside the input
    tempInput.select();
  
    // Execute the 'copy' command
    document.execCommand('copy');
  
    // Clean up: remove the temporary input
    document.body.removeChild(tempInput);
  
    console.log('Text copied to clipboard (legacy):', text);
  }
password1_el.addEventListener("click", function() {
    copyToClipboardLegacy(password1El.textContent);
    alert("Copied to Clipboard");
})
password2_el.addEventListener("click", function() {
    copyToClipboardLegacy(password2El.textContent);
    alert("Copied to Clipboard");
})
