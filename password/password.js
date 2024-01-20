const letters = 'ABCDjklmnopqEFGHIabcdefghiJKLMNOPQRSTUVWXYZrstuvwxyz'
const numbers = '0123456789'
const special = '!@#$%^&*_~'

const generateButton = document.getElementById('generator')
generateButton.addEventListener('click', password, false)

const display = document.getElementById('displayPass')

let passLength = document.getElementById('slider')
const lengthValue = document.getElementById('lengthValue')
passLength.addEventListener('click',()=>
    lengthValue.innerHTML = passLength.value
)

let numChecker = true
const numChecked = document.getElementById('numbers').addEventListener('click', ()=>{
   numChecker===true?numChecker=false:numChecker=true
}, false)

let specialCharChecker = true
const specialCharChecked = document.getElementById("specialChar").addEventListener(
  "click",
  () => {
    specialCharChecker === true ? (specialCharChecker = false) : (specialCharChecker = true);
  },
  false
);

function password(){
    
    let str = ' '
    if(specialCharChecker && numChecker){
        for (let i = 0; i < passLength.value; i++) {
           const index =  Math.floor(Math.random()*(letters.length+numbers.length+special.length))
            str += (letters + special + numbers).charAt(index);
        }
    } else if(specialCharChecker && !numChecker){
        for (let i = 0; i < passLength.value; i++) {
          const index = Math.floor(
            Math.random() * (letters.length + special.length)
          );
          str += (letters + special).charAt(index);
        }
    } else if(!specialCharChecker && numChecker) {
        for (let i = 0; i < passLength.value; i++) {
          const index = Math.floor(
            Math.random() * (letters.length + numbers.length)
          );
          str += (letters + numbers).charAt(index);
        }
    } else {
        for (let i = 0; i < passLength.value; i++) {
          const index = Math.floor(
            Math.random() * (letters.length)
          );
          str += letters.charAt(index);
        }
    }
    display.value = str
}

const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    display.select()
    navigator.clipboard.writeText(display.value)
    alert(`Copied: ${display.value}`)
}, false)