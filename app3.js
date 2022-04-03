for (i=0; i<11; i++){
    console.log(i)
    document.getElementById('p2').innerHTML= "The for-loop counter has reached " + i; 
}

let text = ''; 
j=0; 
while(j<10) {
    text += "The while-loop counter has reached " + j + "\n"; 
    j++; 
    console.log(text); //new line in the console after every loop
    if (j === 5)
    break;
}
const p3 = document.createElement('p');
p3.innerText = "The while-loop is true until counter reaches " + j; 
document.getElementById('demo').appendChild(p3); 

// let myForLoop = ''; 
// for (p=5; p>0; p--) {
//     myForLoop += "The for loop has reached " + p; 
//     console.log(myForLoop)
// }
// const p4 = document.createElement('p'); 
// // p4.setAttribute("id", "par4");
// // document.getElementById("par4").innerHTML += myForLoop;
// const p4Text = document.createTextNode(myForLoop);
// p4.appendChild(p4Text); 
// document.getElementById('demo').appendChild(p4);
//-------------------------------------------------
const p4 = document.createElement('p');
document.getElementById('demo').appendChild(p4); 
let p; 
let result; 
    for (p=5; p>0; p--) {
    result = "the for-loop has decreased from " + p; 
    loop = {p, result}
    console.log(loop); 
}
p4.innerHTML = "Check console. The for-loop has decreased to 1"; 


//--------------------------------
const lineElement = document.createElement('li'); 
const myList = document.getElementById('myList');
myList.appendChild(lineElement); 
const p5 = document.createElement('p');
p5.appendChild(myList); 
document.getElementById('demo').appendChild(p5); 

q = 5; 
while (q>1){
    var saying = q + " bottles of beer on the wall. Take one down and pass it around " + q + " bottles of beer on the wall"; 
    console.log(saying)
    q--; 
    if (q===1) {
        var saying = q + " bottle of beer on the wall. Take one down and pass it around " + q + " bottle of beer on the wall" 
        console.log(saying)
        break; 
    }
}
lineElement.innerHTML= saying; 
// -----------------------------
const p6 = document.createElement('p');
document.getElementById('demo').appendChild(p6); 

let bools =  [true, true, false, true, false, true, true, true] 
for (r=0; r<bools.length; r++){
    if (bools[r] === true){
        let isTrue = "Bools is true at index position " + r ;
        console.log(isTrue);
    } 
    else {console.log("Bools is false at index position " + r);}
}
const count = "The total number of True Values are : " + bools.filter(Boolean).length;
console.log(count);
p6.innerHTML = count; 

// --------------------------------
const p7 = document.createElement('p');
document.getElementById('demo').appendChild(p7);
let str = 'apples';
const arr = str.split(''); 
let numVowels = 0; 
console.log(arr); 
for (s=0; s<arr.length; s++){
// USING FILTER METHOD WITH AN ANON CALLBACK FUNCTION USING .MATCH(REGEX)
//     function getVowelCount() {
//         return arr.filter(arr => arr.match(/[aeiou]/gi)).length;
//     }
//     console.log(getVowelCount());
// }
// p7.innerHTML = "The total number of vowels in the string: " + getVowelCount(); 

    // USING SWITCH STATEMENT -----------------------
    switch (arr[s]){
    case (arr[s] = "a"):
    ++numVowels; 
    console.log("The vowel " + arr[s] + " exists at position " + s);
    break;
    case (arr[s] = "e"):
    ++numVowels; 
    console.log("The vowel " + arr[s] + " exists at position " + s);
    break; 
    case (arr[s] = "i"):
    ++numVowels; 
    console.log("The vowel " + arr[s] + " exists at position " + s);
    break;
    case (arr[s] = "o"):
    ++numVowels; 
    console.log("The vowel " + arr[s] + " exists at position " + s);
    break;
    case (arr[s] = "u"):
    ++numVowels; 
    console.log("The vowel " + arr[s] + " exists at position " + s);
    break;
    default: 
    console.log("This is not a vowel");
    }
}
const vowelExercise = "The total number of vowels in this string: " + numVowels
console.log(vowelExercise); 
p7.innerHTML = vowelExercise; 

